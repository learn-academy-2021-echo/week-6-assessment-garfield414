# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) Blog post controller is inherenting from Application Controller which is a rails utility. 
class BlogPostsController < ApplicationController
  def index
    # ---2) Index is referencing the home page of the application and all the blog posts are being indexed here. 
    @posts = BlogPost.all
  end

  def show
    # ---3) Show takes all the blog posts and finds it by a specific ID value. 
    @post = BlogPost.find(params[:id])
  end

  # ---4) Blog post will allow you to create a new post model(e.g creating a new post in the database).
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) Create will take in parameters from the post request and create this new post. 
    # If the post is valid it will re-direct to the new post path. 
    # Else it will allow the user to create a new blog post. 
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6) Edit is a method that will find a blog post by a specific ID value to edit and or modify. 
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) It will find the post by ID and update it if it's valid, else re-direct them to edit the blog post. 
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) Redirect to blog post path. 
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) Private is a help method called blog_params. 
  private
  def blog_post_params
    # ---10) This methodnrequires post request parameters of title and content. 
    params.require(:blog_post).permit(:title, :content)
  end
end
