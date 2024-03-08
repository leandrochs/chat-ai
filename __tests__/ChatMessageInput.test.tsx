import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ChatMessageInput } from "@/components/ChatMessageInput";

describe("ChatMessageInput", () => {
  it("foca na área de texto quando o componente é montado e não está desabilitado", () => {
    render(<ChatMessageInput disabled={false} onSend={() => {}} />);
    const textarea = screen.getByPlaceholderText("Digite uma mensagem");
    expect(textarea).toHaveFocus();
  });

  
});