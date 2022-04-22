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
            render json: user, include: [:messages]
        else
            render json: {errors: ["Not authorized"]}, status: :unauthorized
        end
    end

    def update 
        user = User.find_by(id: session[:user_id])
        user.update(user_params)
        render json: user
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        head :no_content
    end

   

    # def location
    #     # if Rails.env.production?
    #     city = request.location.city

    #     # country = request.location.country_code
    #     render json: city
    #     # end
    #     # user = User.find(params[:id])
    #     # city = reverse_geocoded_by: :latitude, :longitude,
    #     # :address => user.location
    
    #     # after_validation :reverse_geocode 
    
    #     # render json: city  
    #     # geocoded_by :ip_address,
    #     # :latitude => 
    
        
    # end

    private 
    
    def user_params
        params.permit(:username, :password, :password_confirmation, :gender, :bio, :age, :gender_interest, :user_image, :location, :lon, :lat)
    end

end
