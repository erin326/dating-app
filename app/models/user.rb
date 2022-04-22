class User < ApplicationRecord
    has_secure_password
    has_one_attached :user_image
    validates :username, presence: true, uniqueness: true
    has_many :likes
    has_many :conversations
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
      
    #&: to_proc
    #Like.where(..).map(|like| like.liked_user_id)
    def matches 
        liked_user_ids = Like.where(user_id: self.id, user_approves: true).map(&:liked_user_id)
        likes_me_user_ids = Like.where(liked_user_id: self.id, user_approves: true ).map(&:user_id)

        matched_ids = liked_user_ids.filter{|id| likes_me_user_ids.include?(id)}
      
        liked_me = User.where(id: matched_ids)
        
    end

    def recommended_matches 
        no_like_yet = Like.where(user_id: self.id, user_approves: !nil)
        not_liked_me_yet = Like.where(liked_user_id: self.id, like_account_approves: !nil)

        ignore_ids = no_like_yet.filter{|id| not_liked_me_yet.include?(id)}

        recommended_users = User.where.not(id: ignore_ids)

    end
end
