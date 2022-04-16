class ConversationSerializer < ActiveModel::Serializer
  attributes :id, :sender_id, :recipient_id
  has_many :messages
  has_many :users
  # , serializer: :ConversationUserSerializer
end
