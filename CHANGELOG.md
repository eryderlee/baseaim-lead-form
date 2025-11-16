# Changelog

## [Unreleased] - 2025-11-04

### Quick Qualifier Layout Improvements

#### Changed
- **Expanded calendar step width** - Step 4 (Cal.com booking) now uses `max-w-6xl` (1152px) instead of `max-w-2xl` (672px)
  - Nearly 2x wider for better calendar display
  - Smooth transition animation (500ms) when expanding
  - Steps 1-3 remain standard width for better form focus
  - Landscape format provides more space for calendar selection

- **Removed auto-scroll on step navigation**
  - No more automatic scroll to top when clicking Next/Back
  - Users stay at their current scroll position
  - Better UX - less disorienting navigation
  - Natural flow through the form steps

- **Increased calendar height** - Cal.com iframe now 700px (was 600px)
  - Better utilization of the wider step 4 container
  - More visible calendar dates without scrolling
  - Improved user experience for booking appointments

#### Files Modified
1. `components/MultiStepForm.tsx`
   - Line 84: Removed `window.scrollTo({ top: 0, behavior: 'smooth' })` from `handleNext()`
   - Line 89: Removed `window.scrollTo({ top: 0, behavior: 'smooth' })` from `handleBack()`
   - Line 109: Added conditional width class - `${currentStep === 4 ? 'max-w-6xl' : 'max-w-2xl'}`
   - Line 109: Added smooth transition - `transition-all duration-500`

2. `components/CalendarBooking.tsx`
   - Line 61: Changed minHeight from `600px` to `700px`
   - Line 65: Changed iframe height from `600` to `700`

#### Technical Details
- **Width Transition:** Uses Tailwind's `transition-all duration-500` for smooth expansion
- **Responsive:** Still fully responsive on mobile (stacks to full width)
- **Performance:** No impact - CSS transitions are GPU-accelerated
- **Accessibility:** No changes to keyboard navigation or screen readers

#### User Impact
- ✅ Calendar booking step is much easier to use (wider view)
- ✅ Less scrolling needed within the calendar iframe
- ✅ Smoother navigation between steps (no jarring scroll)
- ✅ Professional transition animation when reaching step 4
- ✅ Better overall form completion experience

---

## [1.0.0] - 2025-11-03

### Initial Release

#### Added
- 4 research-backed layout variations (Original, Hybrid Authority, Quick Qualifier, Video Showcase)
- Multi-step progressive form system (3x better conversion)
- Cal.com instant booking integration (2x conversion boost)
- Floating layout switcher component
- Progress indicator with visual step tracking
- Real-time form validation
- Mobile-responsive design across all layouts
- Animated gradient background system
- URL parameter and localStorage layout persistence
- Pain-point focused copywriting
- Long-form content for complex B2B services
- Trust signals and social proof placement

#### Components Created
- `LayoutSwitcher.tsx` - Floating button to compare layouts
- `MultiStepForm.tsx` - 4-step progressive form
- `ProgressIndicator.tsx` - Visual step progress tracker
- `CalendarBooking.tsx` - Cal.com integration
- `LeadFormShort.tsx` - Simple 3-field form
- `LeadForm.tsx` - Original 5-field form

#### Layouts Created
- `app/layouts/original.tsx` - Original design
- `app/layouts/hybrid.tsx` - Long-form + sticky form
- `app/layouts/multi-step.tsx` - Multi-step focus
- `app/layouts/video.tsx` - Video-first design

#### Documentation Created
- `README.md` - Full project documentation
- `LAYOUT_TESTING_GUIDE.md` - Comprehensive testing strategy
- `PROJECT_FILES.md` - File reference guide
- `GRADIENT_BACKGROUND_TRANSFER_GUIDE.md` - Design system details
- `SETUP_GUIDE.md` - Quick start guide

#### Research Foundation
Based on 2024-2025 CRO research:
- 2M+ form submissions analyzed
- 41K+ landing pages benchmarked
- Unbounce, Chili Piper, HubSpot, CXL studies
- B2B SaaS conversion best practices

---

## Version Format

We use [Semantic Versioning](https://semver.org/):
- **MAJOR** version for incompatible API changes
- **MINOR** version for new functionality (backwards-compatible)
- **PATCH** version for backwards-compatible bug fixes

---

## Categories

- **Added** - New features
- **Changed** - Changes to existing functionality
- **Deprecated** - Soon-to-be removed features
- **Removed** - Removed features
- **Fixed** - Bug fixes
- **Security** - Vulnerability fixes
