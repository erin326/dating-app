class Api::MessagesController < ApplicationController

    def create 
        message = Message.create(message_params)
        current_user = User.find_by(id: session[:user_id]) 
        message.user_id = current_user.id
        current_user.messages << message
        if message.valid? 

         render json: message, status: :created
        else
            render json: {errors: message.errors.full_messages}, status: :unprocessable_entity
        end


        # message = Message.new(message_params)
        #  current_user = User.find_by(id: session[:user_id]) 
        # message.user_id = current_user.id
        # # current_user.messages << message
        # conversation = Conversation.find(message_params[:conversation_id])
        # if message.save
        #     serialized_data = ActiveModelSerializers::Adapter::Json.new(
        #         MessageSerializer.new(message)
        #       ).serializable_hash
        #       MessagesChannel.broadcast_to conversation, serialized_data
        #       head :ok

        #     #   render json: message
            
        # end
        
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
