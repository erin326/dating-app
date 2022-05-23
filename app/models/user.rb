class User < ApplicationRecord
    has_secure_password
    has_one_attached :user_image
    validates :username, presence: true, uniqueness: true
    has_many :likes, dependent: :destroy
    has_many :conversations, dependent: :destroy
    # has_many :user_conversations, dependent: :destroy
    # has_many :conversations, through: :user_conversations
    has_many :messages, dependent: :destroy
    
    # Like.where(...).map {|l| l.liked_user_id}

    def matches 
        liked_user_ids = Like.where(user_id: self.id, user_approves: true).map(&:liked_user_id)
        likes_me_user_ids = Like.where(liked_user_id: self.id, user_approves: true ).map(&:user_id)

        matched_ids = liked_user_ids.filter{|id| likes_me_user_ids.include?(id)}
      
        liked_me = User.where(id: matched_ids)
        
    end

    def recommended_matches 
    
        denied = self.likes.all.filter {|like| like.user_approves == false || like.user_approves == true }
        # no_like_yet = Like.where(user_id: self.id, user_approves: !nil)
        # not_liked_me_yet = Like.where(liked_user_id: self.id, user_approves: !nil)
         ids = denied.map {|l| l.liked_user_id }
        #  r = User.all.filter {|l| l.id != ids}
        #  m = User.where.not(id: r)
        # ignore_ids = no_like_yet.filter{|id| not_liked_me_yet.include?(id)}
      
        # r = User.where.not(id: ignore_ids)
        r = User.where.not(id: ids)

    end

    # def filtered_users 
    #     my_browse = User.all.filter {|u| u.gender_interest == }
    # end

end
