class Api::UsersController < ApplicationController

    def index   
        current_user = User.find_by(id: session[:user_id])
        users = User.where.not(id: current_user.id)
        # if users.valid?
             render json: users, include: [:messages]
        # else
        #     render json: {errors: users.errors.full_messages}, status: :not_found
        # end
    end
    
    def create 
        user = User.create(user_params) 
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end

    end 

    def show
        
        user = User.find_by(id: session[:user_id])
        if user
            render json: user, status: :created, include: [:messages]
        else
            render json: {errors: ["Not authorized"]}, status: :unauthorized
        end
    end

    def update 
        user = User.find_by(id: session[:user_id])
        user.update(user_params)
        render json: user
    end

    # def location
    #     # if Rails.env.production?
    #     city = request.location.city
    #     country = request.location.country_code
    #     render json: city, location
    #     # end
    # end

    private 
    
    def user_params
        params.permit(:username, :password, :password_confirmation, :gender, :bio, :age, :gender_interest, :user_image)
    end

end
