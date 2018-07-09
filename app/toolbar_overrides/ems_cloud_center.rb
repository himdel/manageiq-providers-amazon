module ManageIQ
  module Providers
    module Amazon
      module ToolbarOverrides
        class EmsCloudCenter < ::ApplicationHelper::Toolbar::Override
          button_group('magic', [
            button(
              :magic,
              'fa fa-magic fa-lg',
              t = N_('Magic'),
              t,
              :data  => {'function'      => 'sendDataWithRx',
                         'function-data' => {:controller => 'provider_dialogs', # this one is required
                                             :button     => :magic,
                                             :ems_id     => EmsCloud.first.id}.to_json},
              :klass => ApplicationHelper::Button::ButtonWithoutRbacCheck),
            button(
              :magic_dialog,
              'fa fa-magic fa-lg',
              t = N_('Magic'),
              t,
              :data  => {'function'      => 'sendDataWithRx',
                         'function-data' => {:controller => 'provider_dialogs', # this one is required
                                             :button     => :magic_dialog}.to_json},
              :klass => ApplicationHelper::Button::ButtonWithoutRbacCheck),
          ])
        end
      end
    end
  end
end
