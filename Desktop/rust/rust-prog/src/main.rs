// fn main() {
//     let  x: i32 = 10;
//     let  y: i32 = -10;
//     let  z: i32 = 10;

//     let result:i32= x * y * z;
//     println!("result is: {}", result)
// }

// fn main() {
//     let _is_male = true;
//     let _is_above_18 = true;

//     if _is_male {
//         println!("you are a male");
//     } else {
//         println!("You are not a male");
//     }

//     if _is_male && _is_above_18 {
//         println!("You are a legal Male")
//     }
// }

// fn main() {
//     // strings have no fixed data type they can be change like arrays

//     let mut _name = String::from("Uzair");
//     println!("{}", _name);

//     let _char1 = _name.chars().nth(0);

//    println!("{}", _char1.unwrap());
// }

// conditional loops

fn main() {
    // arrays , maps strings
    let sentence = String::from("Uzair Rehman");
    let first_word = get_first_word(sentence);

    let n = 10;
    for i in 0..n {
        println!("Hello, World {}", i);
    }

    print!("First Word is: {}", first_word);
}
fn get_first_word(sentence: String) -> String {
    let mut ans = String::from("");
    for char in sentence.chars() {
        ans.push_str(char.to_string().as_str());
        if char == ' ' {
            break;
        }
    }
    return ans;
}
