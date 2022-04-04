class Api::PhotosController < ApplicationController

    def update 
        if params[:file]
            @user.user_image.attach(params[:file])
            photo = url_for(@user.user_image)
        end
        if @user.update(photo: photo)
            render json: @user, status: :ok
        end
    end
end
