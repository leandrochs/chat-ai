import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ChatMessageInput } from "@/components/ChatMessageInput";

describe("ChatMessageInput", () => {
  it("foca na área de texto quando o componente é montado e não está desabilitado", () => {
    render(<ChatMessageInput disabled={false} onSend={() => {}} />);
    const textarea = screen.getByPlaceholderText("Digite uma mensagem");
    expect(textarea).toHaveFocus();
  });

  it("atualiza o estado do texto quando o usuário digita na área de texto", async () => {
    render(<ChatMessageInput disabled={false} onSend={() => {}} />);
    const textarea = screen.getByPlaceholderText("Digite uma mensagem");
    await userEvent.type(textarea, "Olá, mundo!");
    expect(textarea).toHaveValue("Olá, mundo!");
  });

  it("chama a função onSend com o texto correto quando o usuário pressiona Enter", async () => {
    const onSendMock = jest.fn();
    render(<ChatMessageInput disabled={false} onSend={onSendMock} />);
    const textarea = screen.getByPlaceholderText("Digite uma mensagem");
    await userEvent.type(textarea, "Olá, mundo!");
    fireEvent.keyUp(textarea, { key: 'Enter', code: 'Enter' });
    expect(onSendMock).toHaveBeenCalledWith("Olá, mundo!");
  });

  it("não chama a função onSend quando o campo de texto está vazio", async () => {
    const onSendMock = jest.fn();
    render(<ChatMessageInput disabled={false} onSend={onSendMock} />);
    const textarea = screen.getByPlaceholderText("Digite uma mensagem");
    await userEvent.type(textarea, "{enter}");
    expect(onSendMock).not.toHaveBeenCalled();
  });
});