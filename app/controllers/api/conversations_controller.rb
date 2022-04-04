class ConversationsController < ApplicationController

    def create 
        current_user = User.find_by(id: session[:user_id])
        conversation = Conversation.create(conversation_params)
        conversation.sender_id = current_user.id
        conversation.messages.first.user_id = current_user.id
        

    end

    private

    def conversation_params 
        params.require(:conversation).permit(:recipient_id, messages_attributes: [:body, :user_id])
    end
end
