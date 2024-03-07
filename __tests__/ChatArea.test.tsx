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
  beforeEach(() => mockScrollTo.mockClear());

  it("chama scrollTo quando o componente é renderizado", () => {
    Element.prototype.scrollTo = mockScrollTo;
    render(<ChatArea chat={chatMock} loading={false} />);
    expect(mockScrollTo).toHaveBeenCalledTimes(1);
  });

  afterEach(() => jest.restoreAllMocks());
});
