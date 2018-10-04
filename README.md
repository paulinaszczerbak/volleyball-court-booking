# Web application to book volleyball courts loacted in SWFiS PWr

The application was created to make booking volleyball courts easier and to avoid conflicts.

Booking system is available only for those who received special invitation from admin (e.g. coach). User can add/update/delete a reservation by clicking on chosen date and hour on app's calendar. Coach should be informed about any actions on calendar. Coach should be able to export data with reservations to deliver it to porter. Coach might deactivate users' accounts in any time.

It's based on React and Redux technologies.


----

## Getting started
### Prerequisites

## App’s objectives
- Logging in as user,
   - Booking volleyball court,
      - View with schedule.
   - Cancelling or editing reservation,
   - Preview on user's account,
      - personal data,
      - user's all reservations.
   - Resetting password,
   - Logging out.

- Logging in as admin.
   - Sending invitations to register.
   - Preview on list of all registered users,
   - Deactivating users' accounts,
   - Export data (?),
   - Logging out.


## App's Views
   - **RegisterPage**,
     - form to set up user's account,
   - **LogInPage**,
     - form to log in to user's account
   - **ResetPasswordPage**,
     - form to set up new password
   - **CalendarPage (Dashboard)**,
     - schedule with possibility of booking exact date, time and court.
     - after clicking on any day in calendar popup should appear and user should be able to set precise time and court (A or B)
     - user should be able to edit or remove any coming reservation,
     - reservations from the past should be not editable
   - **MyAccountPage**,
     - All informations about user:
       - name and surname
       - email
       - index no if user is still a student
   - **MyReservationsPage**,
     - list of all user's reservations: date + court (A or B)
   - **AllUsersPage** (**admin**),
     - list of all registered users with button to deactivate single account
   - **SendInvitationPage** (**admin**)
     - form with only one input to submit an email on which the invitation should be sent

   - **Common elements**:
     - **topbar** containing navigation to dashboard, user account and log out button
     
