import { render, screen } from '@testing-library/react';
import { Sidebar } from '@/components/Sidebar';

describe('Sidebar', () => {
  it('abre e fecha de acordo com a prop open', () => {
    const { rerender } = render(
      <Sidebar open={false} onClose={() => {}} onClear={() => {}} onNewChat={() => {}}>
        <div>Conteúdo da Sidebar</div>
      </Sidebar>
    );
    let sidebarSection = screen.getByTestId('sidebar-section');
    expect(sidebarSection).toHaveClass('w-0');

    rerender(
      <Sidebar open={true} onClose={() => {}} onClear={() => {}} onNewChat={() => {}}>
        <div>Conteúdo da Sidebar</div>
      </Sidebar>
    );

    sidebarSection = screen.getByTestId('sidebar-section');
    expect(sidebarSection).not.toHaveClass('w-0');
  });

  it('dispara onNewChat quando o botão Nova Conversa é clicado', () => {
    const onNewChatMock = jest.fn();
    render(
      <Sidebar open={true} onClose={() => {}} onClear={() => {}} onNewChat={onNewChatMock}>
        <div></div>
      </Sidebar>
    );
    screen.getByText('Nova Conversa').click();
    expect(onNewChatMock).toHaveBeenCalled();
  });
});