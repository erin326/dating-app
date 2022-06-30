class Api::ConversationsController < ApplicationController

    def index 
       
        conversations = Conversation.where("recipient_id = ? OR sender_id = ?", session[:user_id], session[:user_id])
        render json: conversations

    end


    def create 
        current_user = User.find_by(id: session[:user_id])
        conversation = Conversation.create(conversation_params)
        if conversation.valid?
            render json: conversation, status: :created
        else
            render json: {errors: conversation.errors.full_messages}, status: :unprocessable_entity
        end
    end

  
    def show
        conversation = Conversation.find(params[:id])
        render json: conversation, serializer: ConversationSerializer
    end

    private

    def conversation_params 
        params.require(:conversation).permit(:recipient_id, :sender_id)
    end
end
