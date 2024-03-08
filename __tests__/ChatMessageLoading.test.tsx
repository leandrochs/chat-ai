import { render, screen } from "@testing-library/react";
import { ChatMessageLoading } from "@/components/ChatMessageLoading";

describe("ChatMessageLoading", () => {
  it("renderiza o componente de carregamento e seus elementos corretamente", () => {
    render(<ChatMessageLoading />);
    const loadingComponent = screen.getByTestId("chat-message-loading");
    expect(loadingComponent).toBeInTheDocument();

    const iconRobot = screen.getByTestId("icon-robot");
    expect(iconRobot).toBeInTheDocument();

    const blinkElement = screen.getByTestId("blink-element");
    expect(blinkElement).toBeInTheDocument();
  });
});
