class Api::BrowseController < ApplicationController

    def browse 
        current_user = User.find_by(id: session[:user_id])
        # liked_user_ids = Like.where(user_id: current_user.id).map(&:liked_user_id)
        # liked_user_ids << current_user.id
        users = User.where.not(id: current_user.id)
        render json: users
    end

    def approve

        current_user = User.find_by(id: session[:user_id])
        liked_user = User.find(params[:id])

        liked_id = params[:id]
        # logger.debug "User id for matching is #{user_id}"
        
        new_like = Like.create(liked_user_id: liked_id, user_id: current_user.id, user_approves: true)

        
        
        # new_like.user_id = current_user.id

        # if new_like.save 

            they_like_us = Like.where(user_id: liked_id, liked_user_id: current_user.id, user_approves: true)
            if they_like_us.present?
                new_like.like_account_approves = true 
                
            end 
            
            # @they_like_us = existing_like > 0
        # else 
            #issue saving like - return error message
        # end
        render json: new_like
    end

    def decline
        current_user = User.find_by(id: session[:user_id])
        declined_id = params[:id]
        like = Like.find_by(user_id: params[:id], liked_user_id: current_user.id)
        if like.present?
            if like.user_id == current_user.id
                like.user_approves = false
            else
                like.like_account_approves = false
            end
        else
            new_like = Like.create(user_id: current_user.id, liked_user_id: params[:id], user_approves: false)
        end
        render json: new_like

    end

    def matches
        current_user = User.find_by(id: session[:user_id])
        matches = current_user.matches
        render json: matches
    end

    def show_match 
        current_user = User.find_by(id: session[:user_id])
        match = current_user.matches.find(params[:id])
        render json: match
    end

    # def open_conversation
    #     current_user = User.find_by(id: session[:user_id])
    #     profile = User.find(params[:id])
    #     likes = Like.where(user_id: current_user.id, liked_user_id: params[:id])
    #     match = likes.first if likes.size > 0
    #     conversation = Conversation.create(conversation_params)
    #     message = conversation.messages.build 

    #     if profile.present? 
    #         render json: message
    #     end
    # end

    # private
    # def conversation_params
    #     params.permit(:sender_id, :recipient_id)
    # end


end
