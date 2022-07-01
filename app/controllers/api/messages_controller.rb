class Api::MessagesController < ApplicationController

    def create 

        message = Message.create!(message_params)
        conversation = Conversation.find(params[:conversation_id])
        
        ConversationsChannel.broadcast_to(conversation, {type: 'new_message', new_message: message})
        messages = conversation.messages.order(:created_at)
        render json: message
     
    end

    def index
       messages = Message.find_by(conversation_id: params[:id])

       render json: messages

    end


    private 

    def message_params 
        params.require(:message).permit(:user_id, :body, :conversation_id)

    end
end
