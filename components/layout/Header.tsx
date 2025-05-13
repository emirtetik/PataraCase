'use client'
import { Menu, Bell, Settings } from 'lucide-react'
import { useRouter } from 'next/router'
import { Button } from '@/components/ui/button'
import SearchInput from '@/components/search/searchInput'
import { goToHome } from '@/utils/navigation'
import { useAuthStore } from '@/store/authStore'
import { UserDropdown } from '../dropdown/userDropdown'
import Image from 'next/image'

export default function Header() {
  const router = useRouter()
  const isSignedIn = useAuthStore((state) => state.isSignedIn)
  const signIn = useAuthStore((state) => state.signIn)

  const handleConnect = () => {
    signIn()
    goToHome(router)
  }

  const isHomePage = router.pathname === '/home'

  return (
    <header className="flex items-center justify-between px-5 py-3 h-20 bg-[var(--color-black)]">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon">
          <Menu className="h-5 w-5" />
        </Button>
        <div className="flex items-center">
          <Image src="/images/patara_logo.png" alt="Patara Logo" width={134} height={36} />
        </div>
      </div>

      <div className="hidden md:flex flex-1 justify-center">
        <div className="w-full max-w-[29rem]">
          <SearchInput />
        </div>
      </div>

      <div className="hidden md:flex items-center gap-2 justify-center lg:flex lg:justify-center">
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
        </Button>

        {isSignedIn && isHomePage ? (
          <UserDropdown />
        ) : (
          <Button
            variant="default"
            className="font-inter-semibold rounded-md text-sm leading-5 hidden sm:block"
            onClick={handleConnect}
          >
            Connect/Sign in
          </Button>
        )}
      </div>
    </header>
  )
}
