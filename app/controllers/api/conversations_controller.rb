class Api::ConversationsController < ApplicationController

    def index 
        current_user = User.find_by(id: session[:user_id])
        conversations = Conversation.where(user_id: current_user.id)
        render json: conversations

    end

    def show
        # current_user = User.find_by(id: session[:user_id])
        conversation =  Conversation.find(params[:id])
        render json: conversation, include: [:messages]


    end


    def create 
        current_user = User.find_by(id: session[:user_id])
        conversation = Conversation.create(conversation_params)
        # current_user.conversations << conversation
        
        # conversation.sender_id = current_user.id
        # conversation.messages.first.user_id = current_user.id
        if conversation.valid? 
            render json: conversation, status: :created
        else
            render json: {errors: conversation.errors.full_messages}, status: :unprocessable_entity
        end
        
    end

    private

    def conversation_params 
        params.permit(:recipient_id, :user_id 
            # messages_attributes: [:body, :user_id]
        )
    end
end
