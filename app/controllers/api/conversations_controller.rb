class Api::ConversationsController < ApplicationController

    def index 
        current_user = User.find_by(id: session[:user_id])
        conversations = Conversation.where(sender_id: current_user.id)
        # conversations = Conversation.all
        render json: conversations

    end

    # def show
    #     # current_user = User.find_by(id: session[:user_id])
    #     conversation =  Conversation.find(params[:id])
    #     render json: conversation


    # end


    def create 
        # current_user = User.find_by(id: session[:user_id])
        # conversation = Conversation.create(conversation_params)
  
        # if conversation.valid? 
        #     render json: conversation, status: :created
        # else
        #     render json: {errors: conversation.errors.full_messages}, status: :unprocessable_entity
        # end
            

        conversation = Conversation.new(conversation_params)

        if conversation.save 
            ownership1 = UserConversation.create(conversation_id: conversation.id, user_id: conversation.sender_id)
            # ownership1.conversation_id = conversation.id
            # ownership1.user_id = params[:user_id]
            # ownership1.save
            ownership2 = UserConversation.create(conversation_id: conversation.id, user_id: conversation.recipient_id)
            ownership2.conversation_id = conversation.id
            ownership2.user_id = params[:recipient_id]
            ownership2.save
            ownership1.save 
            ownership2.save
            conversation.users << [ownership1, ownership2]
            
        end
        conversation.save
        render json: conversation
            

        
    end
    def other_user_convo
        convo = Conversation.find_by(sender_id: params[:id])

        if convo.present?
            render json: convo, serializer: ConversationSerializer
        else
            render json: {errors: 'no messages'}
        end 

    end
    def show
        conversation = Conversation.find(params[:id])
        render json: conversation, serializer: ConversationSerializer
    end

    private

    def conversation_params 
        params.require(:conversation).permit(:recipient_id, :sender_id 
            # messages_attributes: [:body, :user_id]
        )
    end
end
