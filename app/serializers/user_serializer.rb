class UserSerializer < ActiveModel::Serializer



  include Rails.application.routes.url_helpers

  attributes :id, :username, :age, :gender, :gender_interest, :bio, :liked_people, :user_image

  def user_image
    if object.user_image.attached? 
      rails_blob_url(object.user_image, only_path: true) 
    end
  end
end
