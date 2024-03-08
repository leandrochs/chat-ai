import { fireEvent, render, screen } from '@testing-library/react';
import { Header } from '@/components/Header';

describe('Header', () => {

  it('renderiza o título corretamente', () => {
    render(<Header openSidebarClick={() => {}} title="Conversa" newChatClick={() => {}} />);
    expect(screen.getByText('Conversa')).toBeInTheDocument();
  });

  it('chama a função openSidebarClick quando o ícone de menu é clicado', () => {
    const openSidebarClickMock = jest.fn();
    render(<Header openSidebarClick={openSidebarClickMock} title="Conversa" newChatClick={() => {}} />);
    fireEvent.click(screen.getByTestId('icon-menu'));
    expect(openSidebarClickMock).toHaveBeenCalled();
  });



});