import { render, screen } from '@testing-library/react';
import { ChatMessageItem } from '@/components/ChatMessageItem';
import { ChatMessage } from '@/types/ChatMessage';

const message: ChatMessage = { id: '1', author: 'me', body: 'Olá, mundo!' };

describe('ChatMessageItem', () => {
  it('renderiza a mensagem de texto corretamente', () => {
    render(<ChatMessageItem item={message} />);
    expect(screen.getByText('Olá, mundo!')).toBeInTheDocument();
  });

  it('renderiza o ícone do usuário para mensagens do autor "me"', () => {
    render(<ChatMessageItem item={message} />);
    const userIcon = screen.getByTestId('icon-user');
    expect(userIcon).toBeInTheDocument();
  });

});