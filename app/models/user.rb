class User < ApplicationRecord
    has_secure_password
    has_one_attached :user_image
    validates :username, presence: true, uniqueness: true
    has_many :likes
    
    # has_many :user_conversations, dependent: :destroy
    # has_many :conversations, through: :user_conversations
    has_many :messages
    


        # geocoded_by :ip_address,
    #     :latitude => :lat, :longitude => :lon
    # after_validation :geocode
    # reverse_geocoded_by :lat, :lon do |obj,results|
    #     if geo = results.first
    #       obj.location    = geo.city
    #     #   obj.zipcode = geo.postal_code
    #     #   obj.country = geo.country_code
    #     end
    #   end
    #   after_validation :reverse_geocode
      


    def matches 
        liked_user_ids = Like.where(user_id: self.id, like_account_approves: true).map(&:liked_user_id)
        likes_me_user_ids = Like.where(liked_user_id: self.id, user_approves: true ).map(&:user_id)

        matched_ids = likes_me_user_ids.filter{|id| likes_me_user_ids.include?(id)}
      
        liked_me = User.where(id: matched_ids)
        
    end
end
