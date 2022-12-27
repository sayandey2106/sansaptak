import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Dashboard', href: '#', current: false },
  { name: 'Team', href: '#', current: true },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
<div>
    <Disclosure as="nav" className="bg-red-500">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                  <h1>
                    Sansaptak
                  </h1>
                </div>
                <div className="hidden sm:ml-6 sm:block flex ml-4 justify-center">
                  <div className="flex space-x-4 justify-center">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? ' text-white text-lg underline' : 'text-white text-lg hover:underline hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full  p-1 text-white-focus hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    {/* <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button> */}
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
   
<div>
<section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
        <br class="hidden lg:inline-block"/>readymade gluten
      </h1>
      <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambrayClita sed diam sed aliquyam sit nonumy sea rebum. Takimata sit accusam invidunt lorem. Amet rebum no dolor clita dolor ut tempor et, voluptua consetetur sed kasd eirmod, magna ipsum sed eirmod dolor dolor eirmod, et takimata diam tempor takimata, et ea kasd consetetur ipsum dolor justo. Takimata at labore et diam at dolor lorem dolore eos, est sed sit elitr kasd erat dolores invidunt dolor. Diam dolore aliquyam est lorem aliquyam no justo duo justo. Nonumy clita consetetur eirmod amet diam sed diam ipsum. Tempor diam ipsum clita tempor. Aliquyam sed justo sadipscing et dolor lorem gubergren. Voluptua voluptua diam justo ea est. Lorem aliquyam justo sanctus takimata voluptua sea justo et sit, et invidunt eirmod at sit dolore. Clita diam ipsum invidunt et justo sit duo ea diam. No takimata sed justo ipsum sadipscing vero et et, justo dolor elitr labore tempor lorem takimata amet tempor, consetetur consetetur labore dolor rebum et eos. Kasd ut duo sanctus eos dolore aliquyam. Dolor vero lorem diam erat kasd stet dolor lorem. Et ut voluptua dolores ipsum ut labore. Tempor dolor amet dolor sea dolores dolore et amet, diam invidunt diam lorem nonumy. Et voluptua sit sit ipsum amet dolor ipsum amet kasd, nonumy consetetur sed dolores et ipsum vero amet, et et ipsum sanctus et eos, accusam est sadipscing eirmod magna et et. Lorem at sit et nonumy no elitr ut sed stet. Invidunt voluptua consetetur dolores ut rebum et takimata ea. Et sit ipsum diam eos ea. Lorem clita ipsum erat voluptua invidunt. Kasd eirmod rebum diam invidunt tempor, et accusam voluptua dolor voluptua duo dolor eirmod rebum sed, sit elitr est clita erat at labore elitr ipsum. Takimata vero lorem lorem justo, ea sed ut sed elitr invidunt eirmod eirmod eos. Dolor lorem magna lorem dolore, clita sed sit gubergren invidunt, justo no ipsum et clita consetetur consetetur eos vero labore, dolor diam consetetur duo takimata vero labore. Invidunt justo clita dolores amet consetetur dolores consetetur tempor et. Vero consetetur sit sea sed. Dolores et dolor sea et eos justo takimata aliquyam. Takimata tempor nonumy eirmod takimata elitr. Et ut labore takimata tempor et amet ut, accusam dolor gubergren duo magna diam. Dolore stet ipsum invidunt elitr diam sadipscing. Ut voluptua ipsum sadipscing aliquyam dolor, diam dolor est lorem vero sed takimata. Lorem sed sit kasd sed takimata lorem. Stet tempor stet eos et dolor sed sed sadipscing..</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">Button</button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
    </div>
  </div>
</section>
</div>
</div>
  )
}
