# EduFund Interaction & Animation Document

## Philosophy

The interaction design follows a "calm productivity" approach — animations are subtle, purposeful, and never obstruct the user's workflow. The platform serves parents and students managing tutoring sessions, so interactions must feel reliable and reassuring.

## Global Interactions

### Page Transitions
- **Type**: Fade + slight upward slide
- **Duration**: 200ms
- **Easing**: ease-out
- **Implementation**: React Router navigation with CSS transitions

### Sidebar Interactions

#### Navigation Hover
- **Effect**: Background color change to rgba(255,255,255,0.05)
- **Duration**: 150ms
- **Easing**: ease

#### Navigation Active
- **Effect**: Left border 3px primary blue slides in from left, text turns white
- **Duration**: 200ms
- **Easing**: ease-out

#### Sidebar Collapse (Tablet)
- **Effect**: Width transitions from 240px to 72px, text labels fade out
- **Duration**: 300ms
- **Easing**: cubic-bezier(0.4, 0, 0.2, 1)

### Card Interactions

#### Card Hover
- **Effect**: translateY(-2px) + shadow increase (shadow-md to shadow-lg)
- **Duration**: 200ms
- **Easing**: ease

#### Card Click
- **Effect**: scale(0.98) briefly
- **Duration**: 100ms
- **Easing**: ease-in

### Button Interactions

#### Primary Button Hover
- **Effect**: Background darkens, slight translateY(-1px)
- **Duration**: 150ms

#### Button Click
- **Effect**: scale(0.97)
- **Duration**: 100ms

### Form Interactions

#### Input Focus
- **Effect**: Border color transitions to primary blue, ring appears (0 0 0 3px primary-light)
- **Duration**: 150ms

#### Dropdown Open
- **Effect**: Options slide down + fade in
- **Duration**: 150ms
- **Easing**: ease-out

## Page-Specific Interactions

### Dashboard

#### Stat Card Counter
- **Effect**: Numbers count up from 0 on page load
- **Duration**: 800ms
- **Easing**: ease-out
- **Stagger**: 100ms between cards

#### Session List Load
- **Effect**: Stagger fade-in from top
- **Duration**: 300ms per item
- **Stagger**: 80ms

#### Spending Chart (Donut)
- **Effect**: Segments animate in clockwise
- **Duration**: 1000ms
- **Easing**: ease-out
- **Trigger**: When scrolled into view

### Find a Tutor

#### University Card Hover
- **Effect**: Card lifts + "View Tutors" button becomes more prominent
- **Duration**: 200ms

#### Filter Dropdown
- **Effect**: Slide down with fade
- **Duration**: 150ms

#### Search Input
- **Effect**: Cards filter with fade transition
- **Duration**: 200ms

### Tutor Profile

#### Tab Switch
- **Effect**: Content crossfades
- **Duration**: 200ms
- **Easing**: ease

#### Heart/Favorite Toggle
- **Effect**: Scale bounce (1 -> 1.3 -> 1) + color fill
- **Duration**: 300ms
- **Easing**: cubic-bezier(0.68, -0.55, 0.265, 1.55) (spring)

### Messages

#### Message Send
- **Effect**: New message slides in from right + fades in
- **Duration**: 200ms

#### Typing Indicator
- **Effect**: Three dots bounce animation
- **Duration**: 1.5s infinite loop

#### Conversation Selection
- **Effect**: Background highlight + active indicator
- **Duration**: 150ms

### Notifications

#### Notification Item
- **Effect**: Slide in from right on new notification
- **Duration**: 300ms
- **Easing**: ease-out

#### Mark as Read
- **Effect**: Unread dot fades out, opacity reduces slightly
- **Duration**: 200ms

#### Mark All as Read
- **Effect**: All unread indicators fade simultaneously
- **Duration**: 200ms

### Payments

#### Table Row Hover
- **Effect**: Background changes to gray-50
- **Duration**: 100ms

#### Status Badge
- **Effect**: Subtle pulse on pending items
- **Duration**: 2s infinite

### My Children

#### Progress Bars
- **Effect**: Width animates from 0% to value
- **Duration**: 800ms
- **Easing**: ease-out
- **Trigger**: On scroll into view

#### Add Child Modal
- **Effect**: Overlay fades in (200ms), modal scales up from 0.95 to 1
- **Duration**: 250ms
- **Easing**: ease-out

## Scroll Behaviors

### Scroll-to-Top
- **Trigger**: After scrolling down 300px
- **Effect**: Button appears with fade + slide up
- **Duration**: 200ms

### Infinite Scroll (if needed)
- **Effect**: Skeleton loaders appear, new content fades in
- **Duration**: 300ms

## Loading States

### Skeleton Screens
- **Effect**: Shimmer animation (left-to-right gradient sweep)
- **Duration**: 1.5s infinite
- **Applied to**: Cards, table rows, profile sections

### Button Loading
- **Effect**: Spinner replaces text, button disabled
- **Duration**: Until operation completes

## Feedback Patterns

### Toast Notifications
- **Effect**: Slide in from top-right + fade
- **Duration**: 300ms in, 200ms out
- **Auto-dismiss**: 4 seconds

### Modal/Dialog
- **Overlay**: Fade in 200ms
- **Content**: Scale from 0.95 + fade 250ms
- **Close**: Reverse animation

### Empty States
- **Effect**: Illustration + text fade in
- **Duration**: 400ms
- **Stagger**: Illustration first, then text

## Micro-interactions

### Checkbox Toggle
- **Effect**: Checkmark draws in (SVG stroke animation)
- **Duration**: 200ms

### Toggle Switch
- **Effect**: Knob slides + color changes
- **Duration**: 150ms
- **Easing**: ease

### Badge Count Update
- **Effect**: Scale bounce (1 -> 1.2 -> 1)
- **Duration**: 200ms

### Avatar Hover
- **Effect**: Slight scale(1.05) + ring appears
- **Duration**: 150ms

## Accessibility

### Reduced Motion
- All animations disabled when prefers-reduced-motion: reduce
- Instant state changes instead of transitions

### Focus States
- All interactive elements: 2px solid primary blue outline
- Offset: 2px

## Animation CSS Reference

```css
/* Standard transitions */
--transition-fast: 150ms ease;
--transition-base: 200ms ease;
--transition-slow: 300ms ease;

/* Easing functions */
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-spring: cubic-bezier(0.68, -0.55, 0.265, 1.55);

/* Common patterns */
.fade-in { animation: fadeIn 200ms ease-out; }
.slide-up { animation: slideUp 300ms ease-out; }
.scale-in { animation: scaleIn 250ms cubic-bezier(0.4, 0, 0.2, 1); }
```
