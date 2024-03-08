import { render, screen } from '@testing-library/react';
import { ChatMessageItem } from '@/components/ChatMessageItem';
import { ChatMessage } from '@/types/ChatMessage';

describe('ChatMessageItem', () => {
  it('renderiza a mensagem de texto corretamente', () => {
    const message: ChatMessage = { id: '1', author: 'me', body: 'Olá, mundo!' };
    render(<ChatMessageItem item={message} />);
    expect(screen.getByText('Olá, mundo!')).toBeInTheDocument();
  });

});