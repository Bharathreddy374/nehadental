# Picktime Setup Guide for Dr. Neha's Dental Care

## Step 1: Create Your Picktime Account

1. Go to https://www.picktime.com/
2. Click "Sign Up Free" 
3. Enter your business details:
   - Business Name: **Dr. Neha's Dental Care**
   - Business Type: **Healthcare - Dental**
   - Email: Your professional email
   - Password: Create a secure password

## Step 2: Business Profile Setup

### Basic Information
- **Business Name**: Dr. Neha's Dental Care
- **Business Address**: [Your clinic address]
- **Phone Number**: +91 98765 43210
- **Email**: [Your professional email]
- **Website**: [Your website URL]

### Business Hours
- **Monday to Saturday**: 9:00 AM - 6:30 PM
- **Lunch Break**: 12:00 PM - 2:00 PM
- **Sunday**: Closed

### Service Configuration
Add these services with recommended durations:

1. **General Consultation** - 30 minutes - ₹500
2. **Dental Cleaning** - 45 minutes - ₹1,000
3. **Root Canal Treatment** - 60 minutes - ₹3,000
4. **Dental Filling** - 30 minutes - ₹800
5. **Tooth Extraction** - 30 minutes - ₹1,200
6. **Dental Crown** - 45 minutes - ₹2,500
7. **Teeth Whitening** - 60 minutes - ₹4,000
8. **Orthodontic Consultation** - 45 minutes - ₹800
9. **Emergency Appointment** - 30 minutes - ₹700
10. **Follow-up Visit** - 15 minutes - ₹300

## Step 3: Booking Page Customization

### Branding
- Upload your dental clinic logo
- Choose teal color scheme to match website (#14b8a6)
- Add welcome message: "Welcome to Dr. Neha's Dental Care. Book your appointment for a healthier smile!"

### Booking Form Fields
Enable these fields:
- Patient Name (Required)
- Phone Number (Required)
- Email Address (Required)
- Date of Birth
- Medical History/Notes
- Insurance Information
- Preferred Time of Day

### Confirmation Settings
- **Immediate Confirmation**: Enable
- **Email Confirmation**: Enable
- **SMS Confirmation**: Enable (if available)
- **Reminder Emails**: 24 hours and 2 hours before appointment
- **Reminder SMS**: 24 hours before appointment

## Step 4: Get Your Booking URL

1. Go to **Online Booking** section
2. Copy your public booking page URL
3. It will be something like: `https://www.picktime.com/booking/dr-neha-dental-care`

## Step 5: Update Website Integration

Replace the placeholder URL in the website with your actual Picktime URL:

### File: `client/src/components/PicktimeWidget.tsx`
```tsx
const picktimeUrl = `https://www.picktime.com/booking/YOUR-ACTUAL-PICKTIME-URL`;
```

### File: `client/src/pages/BookNow.tsx`
Update the iframe src attribute with your actual Picktime booking URL.

## Step 6: Test Your Integration

1. Visit your website's Book Now page
2. Test the booking widget
3. Make a test appointment
4. Verify email confirmations work
5. Check calendar integration

## Step 7: Advanced Features (Optional)

### Payment Integration
- Connect with Razorpay or PayU for Indian payments
- Set up advance payment requirements
- Configure cancellation policies

### Calendar Sync
- Sync with Google Calendar
- Enable two-way synchronization
- Set up multiple calendar integration

### Staff Management
- Add additional staff members
- Set individual availability
- Configure service assignments

### Reporting
- Set up appointment reports
- Configure revenue tracking
- Enable patient communication logs

## Troubleshooting

### Common Issues
1. **Booking widget not loading**: Check iframe permissions
2. **Time zone issues**: Ensure correct time zone in Picktime settings
3. **Email notifications not working**: Verify email settings and SMTP configuration

### Support
- Picktime offers free support via email and chat
- Check their help documentation at support.picktime.com
- Contact for technical integration help if needed

## Benefits of This Setup

✅ **Completely Free**: No monthly fees or hidden costs
✅ **Professional Appearance**: Matches your website branding
✅ **Mobile Responsive**: Works on all devices
✅ **Automated Reminders**: Reduces no-shows
✅ **Easy Management**: Simple admin interface
✅ **Secure**: GDPR compliant and secure
✅ **Integrations**: Works with calendars and payment systems

## Next Steps After Setup

1. Train staff on using Picktime admin panel
2. Add booking links to social media profiles
3. Include booking URL in email signatures
4. Consider QR codes for in-office booking
5. Monitor booking analytics and adjust services as needed

Your patients will now be able to book appointments 24/7 directly from your website!