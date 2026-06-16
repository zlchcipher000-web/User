# EduFund Design Document

## Overview

EduFund is a parent/student tutoring portal web application. It features a dark navy sidebar navigation with a light content area. The design is clean, modern, and professional — aimed at parents seeking tutoring services for their children through verified university tutors.

## Layout Structure

### Global Layout
- **Sidebar**: Fixed left, 240px wide, dark navy (#1a1f3c), full height
- **Content Area**: Flexible, light gray background (#f8fafc), scrollable
- **Top Bar**: Within content area, 64px height, white background, contains page title + user profile
- **Main Content**: Padding 24px-32px, contains cards and content sections

### Sidebar Layout
- **Header**: Logo + "PARENT / STUDENT PORTAL" tagline, padding 20px
- **Navigation**: Vertical list of links with icons, 12 items + Logout
- **Active State**: White text on semi-transparent white background, left border accent
- **Inactive State**: Gray text (#94a3b8), no background
- **Hover**: Slight background lighten
- **User Profile Card**: At top, avatar + name + role

### Content Card Pattern
- White background (#ffffff)
- Border radius 12px (radius-lg)
- Shadow: shadow-md
- Padding: 20px-24px
- Optional border: 1px solid Gray 200

## Shared Components

### Navigation Sidebar
- Background: Navy (#1a1f3c)
- Width: 240px
- Items: Dashboard, Find a Tutor, My Requests, My Sessions, Messages, Payments, My Children, Notifications, Profile & Settings, Logout
- Icons: LayoutGrid, Search, ClipboardList, Calendar, MessageSquare, CreditCard, Users, Bell, Settings, LogOut
- Active: White text + bg-white/10 + left border 3px primary blue
- Notification badge: Red circle with number

### Top Header Bar
- Background: White
- Height: 64px
- Left: Page title + subtitle
- Right: Notification bell + User avatar dropdown
- Bottom border: 1px solid Gray 200

### Stat Card
- White background, rounded-xl
- Icon in colored circle (top-left)
- Label text (small, gray)
- Value (large, bold)
- Subtext (small, gray)
- Used on Dashboard, Payments pages

### Tutor Card (List View)
- White card, horizontal layout
- Left: Avatar (64px circle)
- Middle: Name, subjects, rating, university badge
- Right: Rate per hour, availability badge, heart + "View Profile" button

### University Card
- White card, vertical layout
- Top: University logo + name + location
- Middle: Stats row (tutors, subjects, rating, response time)
- Bottom: Colored accent bar + "View Tutors" button

### Request Row (Table)
- Horizontal row with: checkbox, request name, student, tutor, subject, status badge, date
- Alternating or hover highlight
- Status badges color-coded

### Session Row
- Avatar + tutor name + subject
- Date/time info
- Duration badge
- Status badge
- Action buttons (Join Session, View Details)

### Message Thread Row
- Avatar + name + message preview
- Timestamp + unread indicator

### Notification Row
- Icon in colored circle
- Title + description
- Timestamp
- Unread dot indicator

### Badge Variants
- **Success**: Green bg + text (Completed, Approved, Online, Paid)
- **Warning**: Yellow bg + text (Pending, Pending Review)
- **Danger**: Red bg + text (Declined, Cancelled)
- **Info**: Blue bg + text (Scheduled, Awaiting Tutor)
- **Primary**: Purple bg + text (Verified by BSU)

### Buttons
- **Primary**: Primary Blue bg, white text, rounded-lg, hover darker
- **Secondary**: White bg, gray border, gray text, rounded-lg
- **Ghost**: Transparent bg, text only with icon
- **Icon Button**: Circle, icon only, hover background

### Form Elements
- **Input**: White bg, gray border, rounded-lg, focus ring
- **Select**: Dropdown with chevron, same styling
- **Textarea**: Same as input, larger
- **Checkbox**: Rounded square, checked fills primary

## Page: Dashboard (Student)

### Layout
- Sidebar: Dashboard active
- Stats Row: 4 stat cards (Active Requests, Upcoming Sessions, Total Spent, Children Enrolled)
- Two Column Layout:
  - Left (60%): Upcoming Sessions card (3 items) + Recent Updates card
  - Right (40%): Summary widget or CTA

### Stat Cards
1. Active Requests: "2" with "Pending review" - Yellow circle icon
2. Upcoming Sessions: "3" with "This week" - Blue circle icon
3. Total Spent: "P4,350" with "This month" - Green circle icon
4. Children Enrolled: "2" with "Enrolled" - Orange circle icon

### Upcoming Sessions Card
- Title "Upcoming Sessions" + "View all" link
- List of 3 sessions:
  1. Maria Santos - Algebra Tutoring - May 22, 2026 - 4:00 PM-5:30 PM - Confirmed (green badge)
  2. John Dela Cruz - Physics Review - May 24, 2026 - 2:00 PM-3:30 PM - Confirmed (green badge)
  3. Anne Gomez - English Conversation - May 25, 2026 - 10:00 AM-11:30 AM - Pending (yellow badge)

### Recent Updates Card
- Title "Recent Updates"
- List of 3 items:
  1. "Your request for Math Tutoring has been approved by BSU." - May 18, 2026
  2. "New message from Maria Santos" - May 18, 2026
  3. "Payment of P2,000 was successful." - May 17, 2026

## Page: Dashboard (Parent)

### Layout
- Same structure but parent-focused
- Stats: Upcoming Sessions (2), Active Students (2), Total Spent (P4,500), Total Sessions (8)
- Today's Schedule section with tutor avatars
- Spending Overview donut chart (P4,500 total: Math P2,500, Physics P1,500, Others P500)
- Recent Activity list
- CTA banner: "Need help choosing a tutor?" with illustration

## Page: Find a Tutor

### Layout
- Title "Find a Tutor" + subtitle "Step 1 of 4: Choose a University"
- Search bar with filters: Region, Subject, Grade Level, Session Type
- Grid of University Cards (2-3 columns)

### University Cards Content
1. Benguet State University - La Trinidad, Benguet - 124 Active Tutors - 15 Subjects - 4.8 (120 reviews) - Avg. response: 1-2 days
2. Saint Louis University - Baguio City - 98 Active Tutors - 12 Subjects - 4.7 (187 reviews) - Avg. response: 1-2 days
3. University of Baguio - Baguio City - 86 Active Tutors - 10 Subjects - 4.7 (98 reviews) - Avg. response: 1-3 days
4. University of the Cordilleras - Baguio City - 64 Active Tutors - 9 Subjects - 4.6 (112 reviews) - Avg. response: 1-3 days
5. Ifugao State University - Lagawe, Ifugao - 35 Active Tutors - 8 Subjects - 4.6 (76 reviews) - Avg. response: 2-3 days
6. Kalinga State University - Tabuk City, Kalinga - 41 Active Tutors - 8 Subjects - 4.7 (94 reviews) - Avg. response: 2-3 days

### Card Design
- White card with rounded corners
- University logo (colored circle with letter)
- "Verified Partner" green badge
- Stats row with small icons
- Purple accent bottom bar
- "View Tutors" purple button

## Page: University Detail

### Layout
- Back button "Back to Universities"
- Header: University logo + name + "Verified Partner" badge + location
- Tabs: Overview, Available Tutors, Subjects Offered, Reviews
- Share and Favorite buttons

### Overview Tab
- Two columns:
  - Left: Campus photo + Subjects Offered pills
  - Right: About section + Stats (124 Active Tutors, 3,500+ Completed Sessions, 4.8/5 Parent Satisfaction, 1-2 days Avg. Response Time)
- Four feature cards: Verified Tutors, University Oversight, Safe & Secure, Tuition Connected

### Subjects Offered
- Pill tags: Mathematics, Science, English, Physics, Chemistry, Computer Science, Biology, +8 more

## Page: Browse Tutors

### Layout
- Title "Browse Tutors" + subtitle "Benguet State University - 124 Verified Student Tutors"
- Filters: Subject, Grade Level, Hourly Rate, Availability, Session Type, Sort by: Top Rated
- Grid of Tutor Cards (3 per row)

### Tutor Cards
1. Maria Santos - BS Mathematics - 4th Year - Subjects: Algebra, Calculus, Trigonometry - P250/hour - Available - Verified by BSU - 4.9 rating
2. John Dela Cruz - BS Physics - 3rd Year - Subjects: Physics, Mechanics, Thermodynamics - P240/hour - Available - Verified by BSU - 4.8 rating
3. Anne Gomez - BS Computer Science - 3rd Year - Subjects: Programming, Python, C++, Java - P230/hour - Available - Verified by BSU - 4.9 rating
4. Alyssa Domingo - BS Education - 3rd Year - Subjects: English, Literature, Filipino - P220/hour - Available - Verified by BSU - 4.7 rating
5. Mark Anthony Tuzon - BS Civil Engineering - 4th Year - Subjects: Mathematics, Physics - P260/hour - Available - Verified by BSU - 4.8 rating
6. Sarah Reyes - BS Biology - 2nd Year - Subjects: Biology, Chemistry, Environmental Science - P210/hour - Available - Verified by BSU - 4.6 rating

## Page: Tutor Profile

### Layout
- Back button "Back to Tutors"
- Profile Header: Large avatar + Name + Course/Year + Verified badge + Location + Heart + "Request Tutoring" button
- Tabs: About, Reviews (120), Schedule, Session Policies

### About Tab
- Two columns:
  - Left: About Me section + Teaching Approach list
  - Right: Info cards (Student ID, Program, Year Level, Status)
- Rate info: P250/hour + Availability + Response time
- Safety notice banner: "All tutoring requests are reviewed by Benguet State University before confirmation. Your child's safety is our priority."

## Page: Submit Tutoring Request

### Layout
- Title "Submit Tutoring Request" + subtitle
- Step indicator: "Step 3 of 4: Provide Details"
- Two-column form:
  - Left: Student Information (Child select, Grade Level, Subject Needed, Learning Goals)
  - Right: Session Preferences (Preferred Schedule, Preferred Time, Session Type: Online/In-Person, Additional Notes)
- Bottom: "Review Request" button

## Page: My Requests

### Layout
- Title "My Requests"
- Filter tabs: All, Pending Review, Awaiting Tutor, Approved, Declined, Completed
- Table: Checkbox, Request, Student, Tutor/University, Subject, Status, Date, Actions

### Table Content
1. Algebra Tutoring - Juan Santos - Maria Santos/Benguet State University - Algebra - Approved (green) - May 18, 2026
2. Physics Review - Juan Santos - John Dela Cruz/Benguet State University - Physics - Awaiting Tutor (purple) - May 17, 2026
3. English Conversation - Ana Gomez - Saint Louis University - English - Pending Review (yellow) - May 16, 2026
4. Calculus Help - Juan Santos - Mark Tuzon/Benguet State University - Calculus - Declined (red) - May 15, 2026

## Page: My Sessions

### Layout
- Title "My Sessions"
- View toggle: Calendar View / List View
- Filter tabs: Upcoming, Completed, Cancelled

### List View
- Session cards with:
  - Tutor avatar + name + subject
  - Date and time range
  - Duration badge
  - Mode badge (Online)
  - Status badge
  - Action: "Join Session" button or "View Details" link

### Sessions Content (Upcoming)
1. Maria Santos - Algebra Tutoring - May 22, 2026 - 4:00 PM-5:30 PM - 1.5 hrs - Online - Confirmed - Join Session
2. John Dela Cruz - Physics Review - May 24, 2026 - 2:00 PM-3:30 PM - 1.5 hrs - Online - Confirmed - Join Session
3. Anne Gomez - English Conversation - May 25, 2026 - 10:00 AM-11:30 AM - 1.5 hrs - Online - Pending - View Details
4. Maria Santos - Algebra Practice - May 28, 2026 - 4:00 PM-5:30 PM - 1.5 hrs - Online - Scheduled - View Details

## Page: Messages

### Layout
- Three-panel layout:
  - Left: Conversations list
  - Middle: Active conversation
  - Right: Optional details

### Conversations List
- Search bar at top
- Thread items: Avatar, name, last message preview, timestamp, unread count
1. Maria Santos - "See you later at 2 PM!" - 2:30 PM - unread
2. Mark Anthony Tuzon - "I sent the worksheet." - 1:45 PM
3. Alyssa Domingo - "Thank you!" - Yesterday

### Chat Area
- Header: Avatar + name + online status
- Message bubbles:
  - Incoming: White bg, left-aligned
  - Outgoing: Purple/blue bg, right-aligned, white text
- Input: Text field + emoji + send button

## Page: Payments

### Layout
- Title "Payments"
- Stats row: Total Spent (P4,500), Pending Payments (P1,500), Total Paid (P28,000), Outstanding Balance (P1,500)
- Tabs: Payment History, Invoices

### Payment History Table
- Columns: Date, Description, Tutor, Amount, Status, Receipt
- Rows:
  1. May 30, 2026 - Session Payment (May 30) - Maria Santos - P2,500 - Paid (green)
  2. May 28, 2026 - Session Payment (May 28) - Mark Tuzon - P1,500 - Paid (green)
  3. May 25, 2026 - Session Payment (May 25) - Alyssa Domingo - P1,500 - Paid (green)
  4. May 20, 2026 - Add Funds - GCash - P5,000 - Paid (green)
  5. May 15, 2026 - Session Payment (May 15) - Maria Santos - P2,500 - Paid (green)

### Alternative Payments View
- Stats: Account Balance (P1,200), Total Spent (P4,350), Total Sessions (18), Pending Payment (P1,000)
- Transaction History table
- "Add Funds" button

## Page: My Children

### Layout
- Title "My Children" + subtitle "Manage your children and their learning."
- "+ Add Child" button
- Grid of Child Cards (2 per row)

### Child Cards
1. Sophia Dela Cruz - Grade 10
   - Subjects: Mathematics, English
   - Active Sessions: 3
   - Next Session: Today, 2:00 PM with Maria Santos
   - "View Progress" button
2. Juan Dela Cruz - Grade 8
   - Subjects: Science, Filipino
   - Active Sessions: 1
   - Next Session: Jun 4, 2026 with Alyssa Domingo
   - "View Progress" button

### Academic Progress Overview
- Subject progress bars with percentages
  - Mathematics: 80% (Good)
  - Physics: 75% (Improving)
  - English: 70% (Great)

### CTA Banner
- "Need help with something?" + "Find a Tutor" button with illustration

## Page: Notifications

### Layout
- Title "Notifications" + subtitle "Stay updated with your activity."
- Category tabs: All, Sessions, Payments, Messages, System
- "Mark all as read" link

### Notification Items
1. (Bell icon) "Reminder: You have a session with Maria Santos today at 2:00 PM." - 2 minutes ago
2. (Checkmark icon) "Payment of P2,500 was successful." - 30 minutes ago
3. (Message icon) "Maria Santos sent you a message." - 1 hour ago
4. (Session icon) "Your session with Mark Tuzon has been completed." - May 30, 2026
5. (Alert icon) "System maintenance on June 5, 12:00 AM - 2:00 AM." - May 29, 2026

## Page: Profile & Settings

### Layout
- Title "Profile & Settings" + subtitle "Manage your account and preferences."
- Tabs: Profile, Security, Preferences

### Profile Tab
- Two columns:
  - Left: Profile Information card (avatar, full name, email, phone, address) + "Edit Profile" button
  - Right: Account Settings list (Change Password, Notification Preferences, Payment Methods, Connected Accounts) + "Need Help?" card

## Page: Login

### Layout
- Split screen:
  - Left (50%): Navy background with illustration and tagline
  - Right (50%): White background with login form

### Login Form
- EduFund logo
- "Welcome back!" heading
- "Sign in to your parent or student account" subtitle
- Email input
- Password input with show/hide toggle
- "Remember me" checkbox + "Forgot password?" link
- "Sign In" button
- "Don't have an account? Sign up" link

## Responsive Behavior

### Desktop (1200px+)
- Full sidebar (240px) always visible
- Content area: calc(100% - 240px)
- Grid layouts: 3 columns for cards

### Tablet (768px - 1199px)
- Collapsible sidebar (icon only, 72px)
- Content area: calc(100% - 72px)
- Grid layouts: 2 columns for cards

### Mobile (< 768px)
- Hidden sidebar, hamburger menu
- Full-width content
- Single column layouts
- Cards stack vertically
