import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Header } from '@/components/Header';

describe('Header', () => {
  it('renderiza o título corretamente', () => {
    render(<Header openSidebarClick={() => {}} title="Conversa" newChatClick={() => {}} />);
    expect(screen.getByText('Conversa')).toBeInTheDocument();
  });


});