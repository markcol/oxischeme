// Copyright 2014 Nick Fitzgerald
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

//! A Scheme implementation, in Rust.

use std::io;

pub mod value;
pub mod read;
pub mod eval;
pub mod print;

/// The main Read-Eval-Print-Loop.
pub fn main() {
    println!("Welcome to oxischeme!");
    println!("C-c to exit.");
    println!("");

    loop {
        let mut stdout = io::stdio::stdout();
        let stdin = io::stdio::stdin();
        let mut reader = read::Read::new(stdin);

        print!("oxischeme> ");
        for val in reader {
            let evaluated = eval::evaluate(val);
            print::print(evaluated, &mut stdout).ok().expect("IO ERROR!");
            (write!(&mut stdout, "\n")).ok().expect("IO ERROR!");
            (write!(&mut stdout, "oxischeme> ")).ok().expect("IO ERROR!");
            stdout.flush().ok().expect("IO ERROR!");
        }

        match *reader.get_result() {
            Ok(_) => return,
            Err(ref msg) => {
                (write!(&mut stdout, "{}", msg)).ok().expect("IO ERROR!");
                (write!(&mut stdout, "\n")).ok().expect("IO ERROR!");
                stdout.flush().ok().expect("IO ERROR!");
            }
        }
    }
}
