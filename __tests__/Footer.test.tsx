import { render, screen } from '@testing-library/react';
import { Footer } from '@/components/Footer';

describe('Footer', () => {
  it('renderiza o ChatMessageInput com a propriedade disabled', () => {
    render(<Footer disabled={true} onSendMessage={() => {}} />);
    const input = screen.getByPlaceholderText('Digite uma mensagem');
    expect(input).toBeDisabled();
  });
});