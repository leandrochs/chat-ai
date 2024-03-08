import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ChatArea } from "@/components/ChatArea";
import { Chat } from "@/types/Chat";

const mockScrollTo = jest.fn();

const chatMock: Chat = {
  id: "1",
  title: "Título 1",
  messages: [
    { id: "1", author: "me", body: "Mensagem 1" },
    { id: "2", author: "ai", body: "Mensagem 2" },
  ],
};

describe("ChatArea", () => {
  let originalScrollTo: typeof Element.prototype.scrollTo;

  beforeEach(() => {
    originalScrollTo = Element.prototype.scrollTo;
    Element.prototype.scrollTo = mockScrollTo;
    mockScrollTo.mockClear();
  });

  it("chama scrollTo quando o componente é renderizado", () => {
    render(<ChatArea chat={chatMock} loading={false} />);
    expect(mockScrollTo).toHaveBeenCalledTimes(1);
  });

  it("renderiza ChatMessageItem para cada mensagem no chat", () => {
    render(<ChatArea chat={chatMock} loading={false} />);
    expect(screen.getAllByTestId("chat-message-item")).toHaveLength(
      chatMock.messages.length
    );
  });

  it("renderiza ChatMessageLoading quando loading é verdadeiro", () => {
    render(<ChatArea chat={undefined} loading={true} />);
    const chatMessageLoading = screen.getByTestId("chat-message-loading");
    expect(chatMessageLoading).toBeInTheDocument();
  });

  afterEach(() => {
    Element.prototype.scrollTo = originalScrollTo;
    jest.restoreAllMocks();
  });
});
