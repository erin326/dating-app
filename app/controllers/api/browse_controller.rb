class Api::BrowseController < ApplicationController

    def browse 
        current_user = User.find_by(id: session[:user_id])
        list = current_user.recommended_matches.where.not(id: current_user.id)
        render json: list
    end

    def approve
        current_user = User.find_by(id: session[:user_id])
        liked_user = User.find(params[:id])
        liked_id = params[:id]
        new_like = Like.create(liked_user_id: liked_id, user_id: current_user.id, user_approves: true)

        they_like_us = Like.where(user_id: liked_id, liked_user_id: current_user.id, user_approves: true)
            if they_like_us.present?
                new_like.like_account_approves = true     
            end 
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

end
