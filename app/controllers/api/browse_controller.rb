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

        liked_id = params[:id]
        # logger.debug "User id for matching is #{user_id}"

        new_like = Like.create(liked_user_id: liked_id, user_id: current_user.id)
        # new_like.user_id = current_user.id

        # if new_like.save 
            existing_like = Like.where(user_id: liked_id, liked_user_id: current_user.id).count
            @they_like_us = existing_like > 0
        # else 
            #issue saving like - return error message
        # end
        render json: new_like
    end

    def matches
        current_user = User.find_by(id: session[:user_id])
        matches = current_user.matches
        render json: matches
    end

    def open_conversation
        current_user = User.find_by(id: session[:user_id])
        @profile = User.find(params[:id])
        likes = Like.where(user_id: current_user.id, liked_user_id: params[:id])
        @match = likes.first if likes.size > 0
        @conversation = Conversation.new 
        message = @conversation.messages.build 

        if @profile.present? 
            render json: message
        end
    end


end
