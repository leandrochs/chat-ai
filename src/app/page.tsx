"use client";

import { ChatArea } from "@/components/ChatArea";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Chat } from "@/types/Chat";
import { useState } from "react";

const Page = () => {
  const [sidebarOpened, setSidebarOpened] = useState(false);
  const [chatActive, setChatActive] = useState<Chat>();
  

  const openSidebar = () => setSidebarOpened(true)
  const closeSidebar = () => setSidebarOpened(false);

  const handleClearConversations = () => {};

  const handleNewChat = () => {};

  return (
    <main className="flex min-h-screen bg-gpt-gray text-white">
      <Sidebar
        open={sidebarOpened}
        onClose={closeSidebar}
        onClear={handleClearConversations}
        onNewChat={handleNewChat}
      >
        <div>...</div>
      </Sidebar>
      <section className="flex flex-col w-full">
        <Header 
          openSidebarClick={openSidebar}
          title={`bla bal bal`}
          newChatClick={handleNewChat}
        />

        <ChatArea chat={chatActive} />
        
      </section>
    </main>
  );
};

export default Page;
