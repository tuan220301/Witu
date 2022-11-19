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
// pub struct Contract {
//     message: String,
// }
pub struct Blog{
    id: u32,
    content: String,
    date: String,
}
#[derive(BorshDeserialize, BorshSerialize, Serialize, Deserialize, Clone)]
#[serde(crate = "near_sdk::serde")]
pub struct User{
    id: u32,
    user_name: String,
    wallet: String,
    number_phone: String,
    instagram: String,
    facebook: String,
}
#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize)]
pub struct Contract{
    users: Vec<User>,
    blogs: Vec<Blog>,
}
// Define the default, which automatically initializes the contract
impl Default for Contract{
    fn default() -> Self{
        env::panic(b"contract should be initialized before usage");
    }
}

// Implement the contract structure
#[near_bindgen]
impl Contract {
    #[init]
    // Public method - returns the greeting saved, defaulting to DEFAULT_MESSAGE
    pub fn new() -> Self {
        assert!(!env::state_exists(), "The contract is already initialized ...");
        Contract { users: Vec::new(), blogs: Vec::new() }
    }

    // Public method - accepts a greeting, such as "howdy", and records it
    pub fn get_user(self) -> Vec<User> {
        return self.users;
    }
    pub fn get_blog(self) -> Vec<Blog>{
        return self.blogs;
    }
    pub fn update_user(
        &mut self, 
        id: u32,
        user_name: String,
        wallet: String,
        number_phone: String,
        instagram: String,
        facebook: String,
    ){
        let idx = self.users.iter().position(|o| o.id == id).unwrap();
        self.users[idx].user_name = user_name;
        self.users[idx].number_phone = number_phone;
        self.users[idx].instagram = instagram;
        self.users[idx].facebook = facebook;
    }
    pub fn add_blog(
        &mut self, 
        content: String,
        date: String,
    ){
        let mut id: u32 = 1;
        let blog_clone = self.blogs.clone();
        if blog_clone.len() > 0{
            let len = blog_clone.len();
            id = blog_clone[len-1].id+1;
        }
        let new_blog: Blog = Blog{
            id: id,
            content: content,
            date: date,
        };
        self.blogs.push(new_blog);
    }
    
    pub fn update_blog(
        &mut self, 
        id: u32,
        content: String,
        date: String,
    ){
        let idx = self.blogs.iter().position(|o| o.id == id).unwrap();
        self.blogs[idx].content = content;
        self.blogs[idx].date = date;
    }
    pub fn delete_blog(&mut self, id: u32){
        let index = self.blogs.iter().position(|o| o.id == id).unwrap();
        self.blogs.remove(index);
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
        assert_eq!(
            contract.get_user(),
            "Hello".to_string()
        );
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
