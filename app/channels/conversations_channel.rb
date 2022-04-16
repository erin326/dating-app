class ConversationsChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    # stream_from 'conversations_channel'
    stream_from "current_user_#{current_user.id}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
