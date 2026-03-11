# Sprint Plan: Library Management System

## User Stories

### 1. Search Books by Title
- **Priority:** Must Have  
- **Story Points:** 3  
- **User Story:**  
  As a library patron,  
  I want to search for books by title,  
  So that I can quickly find the book I'm looking for.  
- **Acceptance Criteria:**  
  - Search input accepts text  
  - Results display matching book titles  
  - Search is case-insensitive  
  - Shows "No results" if no matches  

### 2. Borrow a Book
- **Priority:** Must Have  
- **Story Points:** 5  
- **User Story:**  
  As a library patron,  
  I want to borrow a book,  
  So that I can take it home to read.  
- **Acceptance Criteria:**  
  - Borrow button available on book details  
  - Updates book status to "Borrowed"  
  - Prevents borrowing if already checked out  

### 3. Return a Book
- **Priority:** Should Have  
- **Story Points:** 3  
- **User Story:**  
  As a library patron,  
  I want to return a book,  
  So that it becomes available for others.  
- **Acceptance Criteria:**  
  - Return option available for borrowed books  
  - Updates status to "Available"  

### 4. Track Due Dates
- **Priority:** Should Have  
- **Story Points:** 5  
- **User Story:**  
  As a librarian,  
  I want to track due dates,  
  So that I can remind patrons to return books on time.  
- **Acceptance Criteria:**  
  - Each borrowed book has a due date  
  - System flags overdue books  
  - Notifications sent for overdue items  

### 5. Manage User Accounts
- **Priority:** Could Have  
- **Story Points:** 6  
- **User Story:**  
  As a librarian,  
  I want to manage user accounts,  
  So that I can keep patron information updated.  
- **Acceptance Criteria:**  
  - Add, edit, delete user accounts  
  - Assign borrowing privileges  
  - Restrict accounts with overdue books  

### 6. Generate Reports
- **Priority:** Won’t Have  
- **Story Points:** 2  
- **User Story:**  
  As a librarian,  
  I want to generate reports of library usage,  
  So that I can analyze borrowing trends.  
- **Acceptance Criteria:**  
  - Report includes number of books borrowed per month  
  - Report includes most popular categories  
  - Export option available  

---

## MoSCoW Prioritization
- **Must Have:** Search Books, Borrow a Book  
- **Should Have:** Return a Book, Track Due Dates  
- **Could Have:** Manage User Accounts  
- **Won’t Have:** Generate Reports  

---

## Story Point Estimation
- Search Books by Title → 3 (simple search functionality)  
- Borrow a Book → 5 (requires status updates and validation)  
- Return a Book → 3 (similar complexity to borrow)  
- Track Due Dates → 5 (needs date handling and notifications)  
- Manage User Accounts → 6 (moderate CRUD operations, trimmed scope)  
- Generate Reports → 2 (basic reporting, deferred)  

**Total = 24 points**  within sprint capacity  

---

## Justification
- **Must Have** features are essential for basic library use.  
- **Should Have** features improve usability and management.  
- **Could Have** adds more complexity but is not critical for first release.  
- **Won’t Have** is useful but can wait until later sprints.  
