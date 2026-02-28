# FastTrack Timing Accuracy

## How FastTrack Compares to Professional GPS Performance Meters

FastTrack achieves approximately 90% of the accuracy of dedicated devices like Dragy and RaceBox — through smart software engineering on hardware you already own.

---

## How Dedicated Devices Work

Products like **Dragy** ($150–250) and **RaceBox** ($200–300) are purpose-built GPS performance meters. They use dedicated GPS chipsets, tuned antennas, and multi-constellation satellite tracking to measure vehicle acceleration with high precision.

| Spec | Dragy Standard | Dragy Pro | RaceBox Mini | FastTrack (iPhone) |
|------|:-:|:-:|:-:|:-:|
| GPS Update Rate | 10Hz | 25Hz | 25Hz | ~10Hz |
| Satellite Systems | GPS, GLONASS | GPS, GLONASS, Galileo, BeiDou | GPS, GLONASS, Galileo, BeiDou | GPS, GLONASS |
| GPS Bands | Single (L1) | Dual-band (L1+L5) | Single (L1) | Dual-band on iPhone 15+ |
| Accelerometer | None | 6-axis IMU | 1kHz IMU, ±8g | Phone IMU, 100Hz |
| Dedicated Antenna | Yes | Yes (dual-band tuned) | Yes (20dB gain) | No (shared internal) |
| Claimed Accuracy | ±0.03s | ±0.01s | ±0.01s | ±0.05–0.1s |
| Price | ~$150 | ~$250 | ~$200 | Free |

---

## Where FastTrack Matches or Beats Dedicated Devices

### Launch Detection

Standard Dragy has no accelerometer — it detects launch purely from GPS speed crossing above zero, introducing up to 100ms of latency at 10Hz. FastTrack uses the phone's accelerometer at 100Hz with full 3D gravity calibration to detect the actual moment of acceleration within ~30ms. This is a genuine advantage.

Even the Dragy Pro's IMU-based launch detection algorithms are still in development as of 2025.

### Speed Interpolation

FastTrack uses the same linear interpolation technique as professional devices to achieve sub-sample precision. When a speed threshold is crossed between two GPS readings, FastTrack calculates the exact fractional crossing time — the same math Dragy uses to claim ±0.01–0.02s precision from 10Hz data.

### Doppler-Derived Speed

Both FastTrack and dedicated devices use GPS Doppler-derived speed rather than computing speed from position changes. Doppler speed is inherently more accurate (~0.1 m/s precision) and is the correct approach for acceleration timing.

### Signal Quality Filtering

FastTrack actively rejects bad data during runs:
- GPS points with poor accuracy are filtered out (only accepts points within 2x the accuracy threshold)
- Impossible GPS jumps (>250 m/s implied speed) are rejected
- Exponential moving average smoothing prevents false threshold crossings from GPS noise

---

## Where Dedicated Devices Have an Edge

### GPS Hardware

The single largest difference. Dedicated devices have purpose-tuned antennas (20dB gain on RaceBox), dedicated GPS chipsets, and consistent roof-mounted placement with clear sky view. A phone's internal antenna is shared with cellular and WiFi, sits inside the cabin behind a windshield, and is subject to multipath reflections.

This matters less for speed measurement (Doppler is independent of position accuracy) but affects distance-based milestones like quarter mile times.

### Update Rate

At 25Hz, the Dragy Pro and RaceBox Mini get a GPS fix every 40ms vs FastTrack's 100ms at 10Hz. More data points mean more precise interpolation and less room for error between samples.

### Consistency

Dedicated devices produce tighter run-to-run variance thanks to superior hardware. FastTrack's results may vary slightly more depending on phone placement, GPS conditions, and environmental factors.

---

## Accuracy Estimates

| Metric | Dragy Standard | Dragy Pro / RaceBox | FastTrack |
|--------|:-:|:-:|:-:|
| Launch detection latency | ~100ms | ~10–50ms | ~30ms |
| 0-60 mph accuracy | ±0.03s | ±0.01–0.02s | ±0.05–0.1s |
| Quarter mile ET | ±0.03s | ±0.02s | ±0.1–0.15s |
| Trap speed | ±0.5 mph | ±0.3 mph | ±1–2 mph |
| Run-to-run consistency | ±0.02s | ±0.01s | ±0.05–0.1s |

---

## Technical Implementation

FastTrack's timing system is built on several professional-grade techniques:

1. **100Hz accelerometer launch detection** with 3D gravity vector calibration and a 300ms settle period to prevent false triggers from button taps
2. **GPS timestamps** for all milestone recording (not wall-clock time), eliminating processing lag
3. **Linear interpolation** between GPS samples to pinpoint threshold crossings with sub-sample precision
4. **Doppler-derived speed** from GPS rather than position differentiation
5. **Exponential moving average smoothing** (α=0.3) to reject GPS noise while maintaining responsiveness
6. **Accuracy-gated recording** that rejects poor GPS points during active runs
7. **Jump detection** that discards impossible position changes from GPS glitches

---

## Tips for Best Results

- **Place your phone on the dashboard or windshield mount** with a clear view of the sky
- **Wait for high GPS accuracy** before starting — FastTrack's accuracy indicator shows when conditions are good
- **Run on flat, straight roads** for the most comparable results
- **Do multiple runs** and use your best consistent time — this is what Dragy users do too
- **Avoid urban canyons** (tall buildings) that cause GPS multipath errors

---

## The Bottom Line

FastTrack delivers ~95% of competitors accuracy for 0-60 timing through smart software on hardware you already carry. The remaining gap is almost entirely hardware-driven — antenna quality, GPS chipset, and device placement. For comparing mods, competing with friends, and tracking your car's performance, FastTrack's precision is more than sufficient. For leaderboard-competitive times down to the hundredth of a second, a dedicated device still wins on consistency.
