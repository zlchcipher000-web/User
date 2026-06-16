import { useState } from 'react';
import { Search, Send, Smile, Paperclip, Phone, Video, MoreVertical } from 'lucide-react';
import { conversations as convData } from '@/data/mock';
import type { Message } from '@/types';

export default function Messages() {
  const [conversations, setConversations] = useState(convData);
  const [activeConv, setActiveConv] = useState(conversations[0]);
  const [messageInput, setMessageInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSend = () => {
    if (!messageInput.trim()) return;
    const newMessage: Message = {
      id: Date.now().toString(),
      senderId: '1',
      senderName: 'Ana Dela Cruz',
      senderAvatar: '/assets/avatars/parent-ana.jpg',
      content: messageInput,
      timestamp: 'Now',
      isRead: true,
    };
    const updatedConv = {
      ...activeConv,
      messages: [...activeConv.messages, newMessage],
      lastMessage: messageInput,
      timestamp: 'Now',
    };
    setActiveConv(updatedConv);
    setConversations(convs => convs.map(c => c.id === updatedConv.id ? updatedConv : c));
    setMessageInput('');
  };

  const filteredConvs = conversations.filter(c =>
    c.participantName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex-1 flex overflow-hidden">
      {/* Conversations List */}
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Messages</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search messages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {filteredConvs.map((conv) => (
            <button
              key={conv.id}
              onClick={() => {
                setActiveConv(conv);
                const updated = { ...conv, unreadCount: 0 };
                setConversations(convs => convs.map(c => c.id === conv.id ? updated : c));
              }}
              className={`w-full flex items-start gap-3 p-4 text-left transition-colors hover:bg-gray-50 ${
                activeConv.id === conv.id ? 'bg-primary/5 border-l-[3px] border-primary' : 'border-l-[3px] border-transparent'
              }`}
            >
              <div className="relative shrink-0">
                <img src={conv.participantAvatar} alt="" className="w-10 h-10 rounded-full object-cover" />
                {conv.online && (
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full ring-2 ring-white"></span>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-sm font-medium text-gray-900 truncate">{conv.participantName}</span>
                  <span className="text-xs text-gray-400 shrink-0 ml-2">{conv.timestamp}</span>
                </div>
                <p className="text-xs text-gray-500 truncate">{conv.lastMessage}</p>
              </div>
              {conv.unreadCount > 0 && (
                <span className="w-5 h-5 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center shrink-0">
                  {conv.unreadCount}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-gray-50">
        {/* Chat Header */}
        <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={activeConv.participantAvatar} alt="" className="w-10 h-10 rounded-full object-cover" />
            <div>
              <h3 className="text-sm font-medium text-gray-900">{activeConv.participantName}</h3>
              <p className="text-xs text-green-500">{activeConv.online ? 'Online' : 'Offline'}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <Phone className="w-4 h-4 text-gray-500" />
            </button>
            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <Video className="w-4 h-4 text-gray-500" />
            </button>
            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <MoreVertical className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {activeConv.messages.map((msg) => {
            const isMe = msg.senderId === '1';
            return (
              <div key={msg.id} className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex items-end gap-2 max-w-[70%] ${isMe ? 'flex-row-reverse' : ''}`}>
                  <img src={msg.senderAvatar} alt="" className="w-7 h-7 rounded-full object-cover shrink-0" />
                  <div
                    className={`px-4 py-2.5 rounded-2xl text-sm ${
                      isMe
                        ? 'bg-primary text-white rounded-br-md'
                        : 'bg-white text-gray-700 rounded-bl-md shadow-sm'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Input */}
        <div className="bg-white border-t border-gray-200 p-3">
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <Paperclip className="w-5 h-5 text-gray-400" />
            </button>
            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <Smile className="w-5 h-5 text-gray-400" />
            </button>
            <input
              type="text"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type a message..."
              className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
            <button
              onClick={handleSend}
              className="p-2.5 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
