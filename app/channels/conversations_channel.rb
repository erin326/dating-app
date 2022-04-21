class ConversationsChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    # stream_from 'conversations_channel'
    conversation = Chat.find(params[:conversation_id])
    stream_for conversation
    broadcast_to(conversation, {type: 'all_messages', messages: conversation.messages})

 
    # stream_from "current_user_#{current_user.id}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
