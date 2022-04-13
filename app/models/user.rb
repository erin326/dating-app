class User < ApplicationRecord
    has_secure_password
    has_one_attached :user_image
    has_many :likes
    has_many :conversations
    has_many :messages, through: :conversations

    def matches 
        liked_user_ids = Like.where(user_id: self.id).map(&:liked_user_id)
        likes_me_user_ids = Like.where(liked_user_id: self.id).map(&:user_id)

        matched_ids = liked_user_ids.filter{|id| likes_me_user_ids.include?(id)}
      
        liked_me = User.where(id: matched_ids)
        
    end
end
