/*
 * Example smart contract written in RUST
 *
 * Learn more about writing NEAR smart contracts with Rust:
 * https://near-docs.io/develop/Contract
 *
 */

use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::env;
use near_sdk::json_types::U64;
use near_sdk::serde::{Deserialize, Serialize};
use near_sdk::{log, near_bindgen, AccountId};

// Define the default message
// const DEFAULT_MESSAGE: &str = "Hello";

// Define the contract structure
// #[near_bindgen]

#[derive(BorshDeserialize, BorshSerialize, Serialize, Deserialize, Clone)]
#[serde(crate = "near_sdk::serde")]
pub struct User {
    id: u32,
    first_name: String,
    last_name: String,
    wallet: String,
    number_phone: String,
    instagram: String,
    facebook: String,
    birthday: String,
    avatar: String,
}
#[derive(BorshDeserialize, BorshSerialize, Serialize, Deserialize, Clone)]
#[serde(crate = "near_sdk::serde")]
pub struct Comment {
    id: u32,
    content: String,
    date: String,
    id_blog: u32,
    id_user: u32,
}
#[derive(BorshDeserialize, BorshSerialize, Serialize, Deserialize, Clone)]
#[serde(crate = "near_sdk::serde")]
pub struct Notice {
    id: u32,
    content: String,
    date: String,
    id_blog: u32,
    id_user: u32,
    id_comment: u32,
    id_friend: u32,

}
#[derive(BorshDeserialize, BorshSerialize, Serialize, Deserialize, Clone)]
#[serde(crate = "near_sdk::serde")]
pub struct Blog {
    id: u32,
    content: String,
    date: String,
    id_user: u32,
    img_blog: String,
}
#[derive(BorshDeserialize, BorshSerialize, Serialize, Deserialize, Clone)]
#[serde(crate = "near_sdk::serde")]
pub struct React{
    id: u32,
    id_user: u32,
    id_blog: u32,
    id_comment: u32,
    id_friend: u32,
    content: String,
    date: String
}
#[derive(BorshDeserialize, BorshSerialize, Serialize, Deserialize, Clone)]
#[serde(crate = "near_sdk::serde")]
pub struct Pending{
    id: u32,
    id_user: u32,
    id_friend: u32,
    date: String
}
#[derive(BorshDeserialize, BorshSerialize, Serialize, Deserialize, Clone)]
#[serde(crate = "near_sdk::serde")]
pub struct Friend{
    id: u32,
    id_user: u32,
    id_friend: u32,
    date: String
}
#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize)]
pub struct Contract {
    users: Vec<User>,
    blogs: Vec<Blog>,
    comments: Vec<Comment>,
    notice: Vec<Notice>,
    pending: Vec<Pending>,
    friend: Vec<Friend>,
    react: Vec<React>,
}
// Define the default, which automatically initializes the contract
impl Default for Contract {
    fn default() -> Self {
        env::panic(b"contract should be initialized before usage");
    }
}

// Implement the contract structure
#[near_bindgen]
impl Contract {
    #[init]
    // Public method - returns the greeting saved, defaulting to DEFAULT_MESSAGE
    pub fn new() -> Self {
        assert!(
            !env::state_exists(),
            "The contract is already initialized ..."
        );
        Contract {
            users: Vec::new(),
            blogs: Vec::new(),
            comments: Vec::new(),
            notice: Vec::new(),
            pending: Vec::new(),
            react: Vec::new(),
            friend:Vec::new(),
        }
    }

    // Public method - accepts a greeting, such as "howdy", and records it
    pub fn get_user(self) -> Vec<User> {
        return self.users;
    }
    pub fn add_user(
        &mut self,
        first_name: String,
        last_name: String,
        number_phone: String,
        instagram: String,
        facebook: String,
        avatar: String,
        wallet: String,
        birthday: String
    ) {
        let mut id: u32 = 1;
        let user_clone = self.users.clone();
        if user_clone.len() > 0 {
            let len = user_clone.len();
            id = user_clone[len - 1].id + 1;
        }
        let new_user: User = User {
            id: id,
            first_name: first_name,
            last_name: last_name,
            wallet: wallet,
            number_phone: number_phone,
            instagram: instagram,
            facebook: facebook,
            avatar: avatar,
            birthday: birthday
        };
        self.users.push(new_user);
    }
    pub fn update_user(
        &mut self,
        id: u32,
        first_name: String,
        last_name: String,
        wallet: String,
        number_phone: String,
        instagram: String,
        facebook: String,
        avatar: String,
        birthday: String
    ) {
        let idx = self.users.iter().position(|o| o.id == id).unwrap();
        self.users[idx].first_name = first_name;
        self.users[idx].last_name = last_name;
        self.users[idx].wallet = wallet;
        self.users[idx].number_phone = number_phone;
        self.users[idx].instagram = instagram;
        self.users[idx].facebook = facebook;
        self.users[idx].avatar = avatar;
        self.users[idx].birthday = birthday;
    }
    pub fn delete_user(&mut self, id: u32) {
        let index = self.users.iter().position(|o| o.id == id).unwrap();
        self.users.remove(index);
    }
    pub fn get_blog(self) -> Vec<Blog> {
        return self.blogs;
    }
    pub fn add_blog(&mut self, content: String, date: String, id_user: u32, img_blog: String) {
        let mut id: u32 = 1;
        let blog_clone = self.blogs.clone();
        if blog_clone.len() > 0 {
            let len = blog_clone.len();
            id = blog_clone[len - 1].id + 1;
        }
        let new_blog: Blog = Blog {
            id: id,
            content: content,
            date: date,
            id_user: id_user,
            img_blog: img_blog,
        };
        self.blogs.push(new_blog);
    }

    pub fn update_blog(&mut self, id: u32, content: String, date: String, id_user: u32, img_blog: String) {
        let idx = self.blogs.iter().position(|o| o.id == id).unwrap();
        self.blogs[idx].content = content;
        self.blogs[idx].date = date;
        self.blogs[idx].img_blog = img_blog;
    }
    pub fn delete_blog(&mut self, id: u32) {
        let index = self.blogs.iter().position(|o| o.id == id).unwrap();
        self.blogs.remove(index);
    }
    pub fn get_cmt(self) -> Vec<Comment> {
        return self.comments;
    }
    pub fn add_comment(&mut self, content: String, date: String, id_blog: u32, id_user: u32) {
        let mut id: u32 = 1;
        let cmt_clone = self.comments.clone();
        if cmt_clone.len() > 0 {
            let len = cmt_clone.len();
            id = cmt_clone[len - 1].id + 1;
        }
        let new_cmt: Comment = Comment {
            id: id,
            content: content,
            date: date,
            id_blog: id_blog,
            id_user: id_user,
        };
        self.comments.push(new_cmt);
    }
    pub fn update_cmt(&mut self, id: u32, content: String, date: String) {
        let idx = self.comments.iter().position(|o| o.id == id).unwrap();
        self.comments[idx].content = content;
        self.comments[idx].date = date;
    }
    pub fn delete_cmt(&mut self, id: u32) {
        let index = self.comments.iter().position(|o| o.id == id).unwrap();
        self.comments.remove(index);
    }
   /*  Notice */
    pub fn get_notice(self) -> Vec<Notice> {
        return self.notice;
    }
    pub fn add_notice(&mut self, content: String, date: String, id_blog: u32, id_user: u32, id_comment: u32, id_friend: u32) {
        let mut id: u32 = 1;
        let notice_clone = self.notice.clone();
        if notice_clone.len() > 0 {
            let len = notice_clone.len();
            id = notice_clone[len - 1].id + 1;
        }
        let new_notice: Notice = Notice {
            id: id,
            content: content,
            date: date,
            id_blog: id_blog,
            id_user: id_user,
            id_comment: id_friend,
            id_friend: id_friend
        };
        self.notice.push(new_notice);
    }
    /* pub fn update_cmt(&mut self, id: u32, content: String, date: String) {
        let idx = self.comments.iter().position(|o| o.id == id).unwrap();
        self.comments[idx].content = content;
        self.comments[idx].date = date;
    } */
    pub fn delete_notice(&mut self, id: u32) {
        let index = self.notice.iter().position(|o| o.id == id).unwrap();
        self.notice.remove(index);
    }
    
    /* Pending */
   pub fn get_pending(self) -> Vec<Pending> {
        return self.pending;
    }
    pub fn add_pending(&mut self,date: String, id_user: u32, id_friend: u32) {
        let mut id: u32 = 1;
        let pending_clone = self.pending.clone();
        if pending_clone.len() > 0 {
            let len = pending_clone.len();
            id = pending_clone[len - 1].id + 1;
        }
        let new_pending: Pending = Pending {
            id: id,
            date: date,
            id_user: id_user,
            id_friend: id_friend
        };
        self.pending.push(new_pending);
    }
    /* pub fn update_cmt(&mut self, id: u32, content: String, date: String) {
        let idx = self.comments.iter().position(|o| o.id == id).unwrap();
        self.comments[idx].content = content;
        self.comments[idx].date = date;
    } */
    pub fn delete_pending(&mut self, id: u32) {
        let index = self.pending.iter().position(|o| o.id == id).unwrap();
        self.pending.remove(index);
    }

   /*  Friend */
    pub fn get_friend(self) -> Vec<Friend> {
        return self.friend;
    }
    pub fn add_friend(&mut self,date: String, id_user: u32, id_friend: u32) {
        let mut id: u32 = 1;
        let friend_clone = self.friend.clone();
        if friend_clone.len() > 0 {
            let len = friend_clone.len();
            id = friend_clone[len - 1].id + 1;
        }
        let new_friend: Friend = Friend {
            id: id,
            date: date,
            id_user: id_user,
            id_friend: id_friend
        };
        self.friend.push(new_friend);
    }
    /* pub fn update_cmt(&mut self, id: u32, content: String, date: String) {
        let idx = self.comments.iter().position(|o| o.id == id).unwrap();
        self.comments[idx].content = content;
        self.comments[idx].date = date;
    } */
    pub fn delete_friend(&mut self, id: u32) {
        let index = self.friend.iter().position(|o| o.id == id).unwrap();
        self.friend.remove(index);
    }  
}

/*
 * The rest of this file holds the inline tests for the code above
 * Learn more about Rust tests: https://doc.rust-lang.org/book/ch11-01-writing-tests.html
 */
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn get_default_greeting() {
        let contract = Contract::default();
        // this test did not call set_greeting so should return the default "Hello" greeting
        assert_eq!(contract.get_user(), "Hello".to_string());
    }

    #[test]
    fn set_then_get_greeting() {
        let mut contract = Contract::default();
        contract.set_greeting("howdy".to_string());
        assert_eq!(
            contract.get_user(),
            // "howdy".to_string()
        );
    }
}
