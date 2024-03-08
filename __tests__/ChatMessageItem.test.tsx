import { render, screen } from '@testing-library/react';
import { ChatMessageItem } from '@/components/ChatMessageItem';
import { ChatMessage } from '@/types/ChatMessage';

const messageMe: ChatMessage = { id: '1', author: 'me', body: 'Olá, mundo!' };
const messageAi: ChatMessage = { id: '1', author: 'ai', body: 'Olá, mundo!' };

describe('ChatMessageItem', () => {
  it('renderiza a mensagem de texto corretamente', () => {
    render(<ChatMessageItem item={messageMe} />);
    expect(screen.getByText('Olá, mundo!')).toBeInTheDocument();
  });

  it('renderiza o ícone do usuário para mensagens do autor "me"', () => {
    render(<ChatMessageItem item={messageMe} />);
    const userIcon = screen.getByTestId('icon-user');
    expect(userIcon).toBeInTheDocument();
  });

  it('renderiza o ícone do robô para mensagens do autor "ai"', () => {
    render(<ChatMessageItem item={messageAi} />);
    const robotIcon = screen.getByTestId('icon-robot');
    expect(robotIcon).toBeInTheDocument();
  });
});