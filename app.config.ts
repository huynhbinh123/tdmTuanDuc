export default defineAppConfig({
  ui: {
    slideover: {
      slots: {
        overlay: 'fixed inset-0 bg-elevated/75',
        content: 'fixed bg-default divide-y divide-default sm:ring ring-default sm:shadow-lg flex flex-col focus:outline-none',
        header: 'flex items-center gap-1.5 p-4 sm:px-6 min-h-16 bg-white text-black',
        wrapper: '',
        body: 'flex-1 overflow-y-auto p-4 sm:p-6 bg-white',
        footer: 'flex items-center gap-1.5 p-4 sm:px-6',
        title: 'text-black font-semibold',
        description: 'mt-1 text-muted text-sm',
        close: 'absolute top-4 end-4'
      },
      variants: {
        side: {
          top: {
            content: 'inset-x-0 top-0 max-h-full'
          },
          right: {
            content: 'right-0 inset-y-0 w-full max-w-md'
          },
          bottom: {
            content: 'inset-x-0 bottom-0 max-h-full'
          },
          left: {
            content: 'left-0 inset-y-0 w-full max-w-md'
          }
        },
        transition: {
          true: {
            overlay: 'data-[state=open]:animate-[fade-in_200ms_ease-out] data-[state=closed]:animate-[fade-out_200ms_ease-in]'
          }
        }
      },
      compoundVariants: [
        {
          transition: true,
          side: 'top',
          class: {
            content: 'data-[state=open]:animate-[slide-in-from-top_200ms_ease-in-out] data-[state=closed]:animate-[slide-out-to-top_200ms_ease-in-out]'
          }
        },
        {
          transition: true,
          side: 'right',
          class: {
            content: 'data-[state=open]:animate-[slide-in-from-right_200ms_ease-in-out] data-[state=closed]:animate-[slide-out-to-right_200ms_ease-in-out]'
          }
        },
        {
          transition: true,
          side: 'bottom',
          class: {
            content: 'data-[state=open]:animate-[slide-in-from-bottom_200ms_ease-in-out] data-[state=closed]:animate-[slide-out-to-bottom_200ms_ease-in-out]'
          }
        },
        {
          transition: true,
          side: 'left',
          class: {
            content: 'data-[state=open]:animate-[slide-in-from-left_200ms_ease-in-out] data-[state=closed]:animate-[slide-out-to-left_200ms_ease-in-out]'
          }
        }
      ]
    }
  }
})
