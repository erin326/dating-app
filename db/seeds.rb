# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

tiffany = User.create(username: 'tiffany', gender: 'female', bio: "I love the outdoors!", age: 31, gender_interest: 'Any/All', lat: 41.982398, lon:-87.660815, location: '', password: 'flop')
tiffany.user_image.attach(io: File.open(Rails.root.join('public/images/anna.jpg')),
            filename: 'anna.jpg')

anna = User.create(username: 'Anna', gender: 'female', bio: "I'm an artist, I love to paint!", age: 31, gender_interest: 'Any/All', password: 'love')
anna.user_image.attach(io: File.open(Rails.root.join('public/images/anna.jpg')),
                  filename: 'anna.jpg')
violet = User.create(username: 'Violet', gender: 'female', bio: "I love animals more than anything! I'm a vegetarian", age: 25, gender_interest: 'Men', password: 'poop')
violet.user_image.attach(io: File.open(Rails.root.join('public/images/violet.jpg')),
                  filename: 'violet.jpg')
theresa = User.create(username: 'Theresa', gender: 'female', bio: "I'm looking for a real relationship, someone to watch movies with til we fall asleep.", age: 27, gender_interest: 'Men', password: 'pop')
theresa.user_image.attach(io: File.open(Rails.root.join('public/images/theresa.jpg')),
                  filename: 'theresa.jpg')
nikki = User.create(username: 'Nikki', gender: 'female', bio: "I'm an entrepreneur, currently building my spray tanning business.", age: 30, gender_interest: 'Men', password: 'lerv')
nikki.user_image.attach(io: File.open(Rails.root.join('public/images/nikki.jpg')),
                  filename: 'nikki.jpg')                                   
kelly = User.create(username: 'Kelly', gender: 'female', bio: "I'm an artist, I love anything creative. Free spirit :)", age: 31, gender_interest: 'Any/All', password: 'lacey')
kelly.user_image.attach(io: File.open(Rails.root.join('public/images/kelly.jpg')),
                  filename: 'kelly.jpg')
                  
liz = User.create(username: 'Liz', gender: 'female', bio: "I'm a mom first and foremost, I love my babies more than anything! ", age: 29, gender_interest: 'Any/All', password: 'leo')
liz.user_image.attach(io: File.open(Rails.root.join('public/images/liz.jpg')),
                  filename: 'liz.jpg')

                  


