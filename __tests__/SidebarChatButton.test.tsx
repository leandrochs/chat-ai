import { render, screen, fireEvent } from "@testing-library/react";
import { SidebarChatButton } from "@/components/SidebarChatButton";
import { Chat } from "@/types/Chat";

describe("SidebarChatButton", () => {
  const onClickMock = jest.fn();
  const onDeleteMock = jest.fn();
  const onEditMock = jest.fn();
  const chatItemMock: Chat = {
    id: "1",
    title: "Título 1",
    messages: [
      { id: "1", author: "me", body: "Mensagem 1" },
      { id: "2", author: "ai", body: "Mensagem 2" },
    ],
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("chama onClick quando não está editando ou excluindo", () => {
    render(
      <SidebarChatButton
        chatItem={chatItemMock}
        active={false}
        onClick={onClickMock}
        onDelete={onDeleteMock}
        onEdit={onEditMock}
      />
    );
    fireEvent.click(screen.getByText(chatItemMock.title));
    expect(onClickMock).toHaveBeenCalledWith(chatItemMock.id);
  });

  it("entra no modo de edição quando o ícone de edição é clicado", () => {
    render(
      <SidebarChatButton
        chatItem={chatItemMock}
        active={true}
        onClick={onClickMock}
        onDelete={onDeleteMock}
        onEdit={onEditMock}
      />
    );
    fireEvent.click(screen.getByTestId("icon-edit"));
    expect(screen.getByDisplayValue(chatItemMock.title)).toBeInTheDocument();
  });

  it("entra no modo de exclusão quando o ícone de lixeira é clicado", () => {
    render(
      <SidebarChatButton
        chatItem={chatItemMock}
        active={true}
        onClick={onClickMock}
        onDelete={onDeleteMock}
        onEdit={onEditMock}
      />
    );
    fireEvent.click(screen.getByTestId("icon-trash"));
    expect(
      screen.getByText(`Delete "${chatItemMock.title}"`)
    ).toBeInTheDocument();
  });

  it("chama onDelete quando o modo de exclusão está ativo e o botão de confirmar é clicado", () => {
    render(
      <SidebarChatButton
        chatItem={chatItemMock}
        active={true}
        onClick={onClickMock}
        onDelete={onDeleteMock}
        onEdit={onEditMock}
      />
    );
    fireEvent.click(screen.getByTestId("icon-trash")); // Ativa o modo de exclusão
    fireEvent.click(screen.getByTestId("icon-check")); // Confirma a exclusão
    expect(onDeleteMock).toHaveBeenCalledWith(chatItemMock.id);
  });

  it("chama onEdit quando o modo de edição está ativo, um novo título é inserido e o botão de confirmar é clicado", () => {
    const newTitle = "New Chat Title";
    render(
      <SidebarChatButton
        chatItem={chatItemMock}
        active={true}
        onClick={onClickMock}
        onDelete={onDeleteMock}
        onEdit={onEditMock}
      />
    );
    fireEvent.click(screen.getByTestId("icon-edit")); // Ativa o modo de edição
    fireEvent.change(screen.getByDisplayValue(chatItemMock.title), {
      target: { value: newTitle },
    });
    fireEvent.click(screen.getByTestId("icon-check")); // Confirma a edição
    expect(onEditMock).toHaveBeenCalledWith(chatItemMock.id, newTitle.trim());
  });

  it("desativa os modos de exclusão e edição quando o botão de cancelar é clicado", () => {
    render(
      <SidebarChatButton
        chatItem={chatItemMock}
        active={true}
        onClick={onClickMock}
        onDelete={onDeleteMock}
        onEdit={onEditMock}
      />
    );
    fireEvent.click(screen.getByTestId("icon-edit")); // Ativa o modo de edição
    fireEvent.click(screen.getByTestId("icon-close")); // Cancela a edição
    expect(
      screen.queryByDisplayValue(chatItemMock.title)
    ).not.toBeInTheDocument();
    expect(onEditMock).not.toHaveBeenCalled();
  });
});
