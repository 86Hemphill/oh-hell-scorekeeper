import { Capacitor } from '@capacitor/core'
import { Haptics, ImpactStyle, NotificationType } from '@capacitor/haptics'

function playHaptic(effect) {
  if (!Capacitor.isNativePlatform() || !Capacitor.isPluginAvailable('Haptics')) return

  try {
    void effect().catch(() => {})
  } catch {
    // Haptic feedback must never interrupt scoring.
  }
}

export function lightScoreChange() {
  playHaptic(() => Haptics.impact({ style: ImpactStyle.Light }))
}

export function finishedGame() {
  playHaptic(() => Haptics.notification({ type: NotificationType.Success }))
}
