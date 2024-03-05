"use client";

import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { useState } from "react";

const Page = () => {
  const [sidebarOpened, setSidebarOpened] = useState(false);

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
        
      </section>
    </main>
  );
};

export default Page;
